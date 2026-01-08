import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormInput,
  CFormLabel,
  CBadge,
  CAlert,
  CInputGroup,
  CInputGroupText,
  CSpinner,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch, cilTrash, cilCloudDownload, cilHistory, cilReload } from '@coreui/icons'

const RECORD_TYPES = ['A', 'AAAA', 'MX', 'TXT', 'NS', 'CNAME', 'SOA']
const STORAGE_KEY = 'dns_lookup_history'

const getTypeBadge = (type) => {
  const colors = {
    A: 'primary',
    AAAA: 'info',
    CNAME: 'success',
    MX: 'warning',
    TXT: 'secondary',
    NS: 'dark',
    SOA: 'danger',
  }
  return <CBadge color={colors[type] || 'secondary'}>{type}</CBadge>
}

const extractDomain = (input) => {
  let domain = input.trim().toLowerCase()
  domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '')
  domain = domain.split('/')[0]
  domain = domain.split(':')[0]
  return domain
}

const DNSLookup = () => {
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(null)
  const [activeTab, setActiveTab] = useState('lookup')
  const [savedLookups, setSavedLookups] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState(null)
  const [viewingLookup, setViewingLookup] = useState(null)

  useEffect(() => {
    loadSavedLookups()
  }, [])

  const loadSavedLookups = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        setSavedLookups(JSON.parse(saved))
      }
    } catch (err) {
      console.error('Error loading saved lookups:', err)
    }
  }

  const saveLookup = (lookupData) => {
    try {
      const existingIndex = savedLookups.findIndex((l) => l.domain === lookupData.domain)
      let updated
      if (existingIndex >= 0) {
        updated = [...savedLookups]
        updated[existingIndex] = lookupData
      } else {
        updated = [lookupData, ...savedLookups]
      }
      if (updated.length > 50) {
        updated = updated.slice(0, 50)
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setSavedLookups(updated)
      setAlert({ type: 'success', message: 'DNS records saved for offline access!' })
      setTimeout(() => setAlert(null), 3000)
    } catch (err) {
      console.error('Error saving lookup:', err)
      setAlert({ type: 'danger', message: 'Failed to save lookup to local storage' })
      setTimeout(() => setAlert(null), 3000)
    }
  }

  const deleteLookup = (index) => {
    try {
      const updated = savedLookups.filter((_, i) => i !== index)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
      setSavedLookups(updated)
      setShowDeleteModal(false)
      setDeleteIndex(null)
      setAlert({ type: 'success', message: 'Saved lookup deleted!' })
      setTimeout(() => setAlert(null), 3000)
    } catch (err) {
      console.error('Error deleting lookup:', err)
    }
  }

  const clearAllLookups = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
      setSavedLookups([])
      setAlert({ type: 'success', message: 'All saved lookups cleared!' })
      setTimeout(() => setAlert(null), 3000)
    } catch (err) {
      console.error('Error clearing lookups:', err)
    }
  }

  const fetchDNSRecords = async (domainToLookup) => {
    const records = []

    for (const type of RECORD_TYPES) {
      try {
        const response = await fetch(
          `https://dns.google/resolve?name=${encodeURIComponent(domainToLookup)}&type=${type}`,
          {
            headers: {
              Accept: 'application/dns-json',
            },
          },
        )

        if (!response.ok) {
          continue
        }

        const data = await response.json()

        if (data.Answer) {
          for (const answer of data.Answer) {
            let recordType = type
            if (answer.type === 1) recordType = 'A'
            else if (answer.type === 28) recordType = 'AAAA'
            else if (answer.type === 5) recordType = 'CNAME'
            else if (answer.type === 15) recordType = 'MX'
            else if (answer.type === 16) recordType = 'TXT'
            else if (answer.type === 2) recordType = 'NS'
            else if (answer.type === 6) recordType = 'SOA'

            records.push({
              type: recordType,
              name: answer.name,
              value: answer.data,
              ttl: answer.TTL,
            })
          }
        }
      } catch (err) {
        console.error(`Error fetching ${type} records:`, err)
      }
    }

    const uniqueRecords = records.filter(
      (record, index, self) =>
        index === self.findIndex((r) => r.type === record.type && r.value === record.value),
    )

    return uniqueRecords
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cleanDomain = extractDomain(domain)

    if (!cleanDomain) {
      setError('Please enter a valid domain name')
      return
    }

    setLoading(true)
    setError(null)
    setResults(null)

    try {
      const records = await fetchDNSRecords(cleanDomain)

      if (records.length === 0) {
        setError(`No DNS records found for ${cleanDomain}. Please check the domain name.`)
        setLoading(false)
        return
      }

      const lookupData = {
        domain: cleanDomain,
        timestamp: new Date().toISOString(),
        records: records,
      }

      setResults(lookupData)
      saveLookup(lookupData)
    } catch (err) {
      setError(`Failed to fetch DNS records: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleViewSaved = (lookup) => {
    setViewingLookup(lookup)
    setResults(lookup)
    setDomain(lookup.domain)
    setActiveTab('lookup')
  }

  const handleRefreshLookup = async (lookup) => {
    setDomain(lookup.domain)
    setActiveTab('lookup')
    setLoading(true)
    setError(null)

    try {
      const records = await fetchDNSRecords(lookup.domain)

      if (records.length === 0) {
        setError(`No DNS records found for ${lookup.domain}`)
        setLoading(false)
        return
      }

      const lookupData = {
        domain: lookup.domain,
        timestamp: new Date().toISOString(),
        records: records,
      }

      setResults(lookupData)
      saveLookup(lookupData)
    } catch (err) {
      setError(`Failed to refresh DNS records: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const exportToJSON = (lookup) => {
    const dataStr = JSON.stringify(lookup, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
    const exportFileDefaultName = `dns-records-${lookup.domain}-${new Date().toISOString().split('T')[0]}.json`

    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString()
  }

  return (
    <CRow>
      <CCol xs={12}>
        {alert && (
          <CAlert color={alert.type} dismissible onClose={() => setAlert(null)}>
            {alert.message}
          </CAlert>
        )}

        <CCard className="mb-4">
          <CCardHeader>
            <strong>DNS Lookup</strong> <small>Query DNS records for any domain</small>
          </CCardHeader>
          <CCardBody>
            <CNav variant="tabs" className="mb-3">
              <CNavItem>
                <CNavLink active={activeTab === 'lookup'} onClick={() => setActiveTab('lookup')}>
                  <CIcon icon={cilSearch} className="me-2" />
                  Lookup
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink active={activeTab === 'saved'} onClick={() => setActiveTab('saved')}>
                  <CIcon icon={cilHistory} className="me-2" />
                  Saved Lookups ({savedLookups.length})
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabContent>
              <CTabPane visible={activeTab === 'lookup'}>
                <CForm onSubmit={handleSubmit}>
                  <CRow className="mb-4">
                    <CCol md={8}>
                      <CFormLabel htmlFor="domain">Enter Domain or URL</CFormLabel>
                      <CInputGroup>
                        <CInputGroupText>
                          <CIcon icon={cilSearch} />
                        </CInputGroupText>
                        <CFormInput
                          type="text"
                          id="domain"
                          value={domain}
                          onChange={(e) => setDomain(e.target.value)}
                          placeholder="example.com or https://www.example.com"
                          disabled={loading}
                        />
                        <CButton type="submit" color="primary" disabled={loading || !domain.trim()}>
                          {loading ? (
                            <>
                              <CSpinner size="sm" className="me-2" />
                              Looking up...
                            </>
                          ) : (
                            'Lookup DNS'
                          )}
                        </CButton>
                      </CInputGroup>
                      <small className="text-muted">
                        Enter a domain name (e.g., google.com) or full URL. The protocol and path
                        will be automatically stripped.
                      </small>
                    </CCol>
                  </CRow>
                </CForm>

                {error && (
                  <CAlert color="danger" className="mt-3">
                    {error}
                  </CAlert>
                )}

                {results && (
                  <CCard className="mt-4">
                    <CCardHeader className="d-flex justify-content-between align-items-center">
                      <div>
                        <strong>DNS Records for {results.domain}</strong>
                        <br />
                        <small className="text-muted">
                          Last updated: {formatTimestamp(results.timestamp)}
                        </small>
                      </div>
                      <CButton color="secondary" size="sm" onClick={() => exportToJSON(results)}>
                        <CIcon icon={cilCloudDownload} className="me-2" />
                        Export JSON
                      </CButton>
                    </CCardHeader>
                    <CCardBody>
                      <CTable hover responsive>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell>Type</CTableHeaderCell>
                            <CTableHeaderCell>Name</CTableHeaderCell>
                            <CTableHeaderCell>Value</CTableHeaderCell>
                            <CTableHeaderCell>TTL</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {results.records.map((record, index) => (
                            <CTableRow key={index}>
                              <CTableDataCell>{getTypeBadge(record.type)}</CTableDataCell>
                              <CTableDataCell>
                                <code>{record.name}</code>
                              </CTableDataCell>
                              <CTableDataCell>
                                <span
                                  className="text-break"
                                  style={{ maxWidth: '400px', display: 'inline-block' }}
                                >
                                  {record.value}
                                </span>
                              </CTableDataCell>
                              <CTableDataCell>{record.ttl}s</CTableDataCell>
                            </CTableRow>
                          ))}
                        </CTableBody>
                      </CTable>
                      <div className="mt-3">
                        <small className="text-muted">
                          Found {results.records.length} DNS record(s). Records are automatically
                          saved for offline access.
                        </small>
                      </div>
                    </CCardBody>
                  </CCard>
                )}
              </CTabPane>

              <CTabPane visible={activeTab === 'saved'}>
                {savedLookups.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <CIcon icon={cilHistory} size="3xl" className="mb-3" />
                    <p>
                      No saved lookups yet. Perform a DNS lookup to save records for offline access.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span>
                        <strong>{savedLookups.length}</strong> saved lookup(s)
                      </span>
                      <CButton color="danger" variant="outline" size="sm" onClick={clearAllLookups}>
                        <CIcon icon={cilTrash} className="me-2" />
                        Clear All
                      </CButton>
                    </div>
                    <CTable hover responsive>
                      <CTableHead>
                        <CTableRow>
                          <CTableHeaderCell>Domain</CTableHeaderCell>
                          <CTableHeaderCell>Records</CTableHeaderCell>
                          <CTableHeaderCell>Last Updated</CTableHeaderCell>
                          <CTableHeaderCell>Actions</CTableHeaderCell>
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {savedLookups.map((lookup, index) => (
                          <CTableRow key={index}>
                            <CTableDataCell>
                              <strong>{lookup.domain}</strong>
                            </CTableDataCell>
                            <CTableDataCell>
                              <CBadge color="secondary">{lookup.records.length}</CBadge>
                            </CTableDataCell>
                            <CTableDataCell>{formatTimestamp(lookup.timestamp)}</CTableDataCell>
                            <CTableDataCell>
                              <CButton
                                color="primary"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleViewSaved(lookup)}
                                className="me-1"
                                title="View Records"
                              >
                                <CIcon icon={cilSearch} />
                              </CButton>
                              <CButton
                                color="info"
                                variant="ghost"
                                size="sm"
                                onClick={() => handleRefreshLookup(lookup)}
                                className="me-1"
                                title="Refresh"
                              >
                                <CIcon icon={cilReload} />
                              </CButton>
                              <CButton
                                color="secondary"
                                variant="ghost"
                                size="sm"
                                onClick={() => exportToJSON(lookup)}
                                className="me-1"
                                title="Export JSON"
                              >
                                <CIcon icon={cilCloudDownload} />
                              </CButton>
                              <CButton
                                color="danger"
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setDeleteIndex(index)
                                  setShowDeleteModal(true)
                                }}
                                title="Delete"
                              >
                                <CIcon icon={cilTrash} />
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </>
                )}
              </CTabPane>
            </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>

      <CModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <CModalHeader>
          <CModalTitle>Confirm Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete this saved lookup?
          {deleteIndex !== null && savedLookups[deleteIndex] && (
            <div className="mt-3 p-3 bg-light rounded">
              <strong>Domain:</strong> {savedLookups[deleteIndex].domain}
              <br />
              <strong>Records:</strong> {savedLookups[deleteIndex].records.length}
              <br />
              <strong>Saved:</strong> {formatTimestamp(savedLookups[deleteIndex].timestamp)}
            </div>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </CButton>
          <CButton color="danger" onClick={() => deleteLookup(deleteIndex)}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default DNSLookup
