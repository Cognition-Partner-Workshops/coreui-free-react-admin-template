import React, { useState } from 'react'
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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CBadge,
  CAlert,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilPencil, cilTrash, cilSearch } from '@coreui/icons'

const initialRecords = [
  { id: 1, type: 'A', name: '@', value: '192.168.1.1', ttl: 3600, status: 'active' },
  { id: 2, type: 'A', name: 'www', value: '192.168.1.1', ttl: 3600, status: 'active' },
  {
    id: 3,
    type: 'AAAA',
    name: '@',
    value: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    ttl: 3600,
    status: 'active',
  },
  { id: 4, type: 'CNAME', name: 'mail', value: 'mail.example.com', ttl: 3600, status: 'active' },
  {
    id: 5,
    type: 'MX',
    name: '@',
    value: 'mail.example.com',
    ttl: 3600,
    priority: 10,
    status: 'active',
  },
  {
    id: 6,
    type: 'TXT',
    name: '@',
    value: 'v=spf1 include:_spf.example.com ~all',
    ttl: 3600,
    status: 'active',
  },
  { id: 7, type: 'NS', name: '@', value: 'ns1.example.com', ttl: 86400, status: 'active' },
  { id: 8, type: 'NS', name: '@', value: 'ns2.example.com', ttl: 86400, status: 'active' },
  {
    id: 9,
    type: 'SRV',
    name: '_sip._tcp',
    value: 'sipserver.example.com',
    ttl: 3600,
    priority: 10,
    weight: 60,
    port: 5060,
    status: 'active',
  },
  {
    id: 10,
    type: 'CAA',
    name: '@',
    value: '0 issue "letsencrypt.org"',
    ttl: 3600,
    status: 'active',
  },
]

const recordTypes = ['A', 'AAAA', 'CNAME', 'MX', 'TXT', 'NS', 'SRV', 'CAA', 'PTR', 'SOA']

const getStatusBadge = (status) => {
  switch (status) {
    case 'active':
      return <CBadge color="success">Active</CBadge>
    case 'pending':
      return <CBadge color="warning">Pending</CBadge>
    case 'error':
      return <CBadge color="danger">Error</CBadge>
    default:
      return <CBadge color="secondary">Unknown</CBadge>
  }
}

const getTypeBadge = (type) => {
  const colors = {
    A: 'primary',
    AAAA: 'info',
    CNAME: 'success',
    MX: 'warning',
    TXT: 'secondary',
    NS: 'dark',
    SRV: 'danger',
    CAA: 'primary',
    PTR: 'info',
    SOA: 'dark',
  }
  return <CBadge color={colors[type] || 'secondary'}>{type}</CBadge>
}

const DNSRecords = () => {
  const [records, setRecords] = useState(initialRecords)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [editingRecord, setEditingRecord] = useState(null)
  const [deleteRecord, setDeleteRecord] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('')
  const [alert, setAlert] = useState(null)
  const [formData, setFormData] = useState({
    type: 'A',
    name: '',
    value: '',
    ttl: 3600,
    priority: '',
    weight: '',
    port: '',
  })

  const handleOpenModal = (record = null) => {
    if (record) {
      setEditingRecord(record)
      setFormData({
        type: record.type,
        name: record.name,
        value: record.value,
        ttl: record.ttl,
        priority: record.priority || '',
        weight: record.weight || '',
        port: record.port || '',
      })
    } else {
      setEditingRecord(null)
      setFormData({
        type: 'A',
        name: '',
        value: '',
        ttl: 3600,
        priority: '',
        weight: '',
        port: '',
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingRecord(null)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingRecord) {
      setRecords((prev) =>
        prev.map((r) =>
          r.id === editingRecord.id
            ? {
                ...r,
                ...formData,
                ttl: parseInt(formData.ttl),
                priority: formData.priority ? parseInt(formData.priority) : undefined,
                weight: formData.weight ? parseInt(formData.weight) : undefined,
                port: formData.port ? parseInt(formData.port) : undefined,
              }
            : r,
        ),
      )
      setAlert({ type: 'success', message: 'DNS record updated successfully!' })
    } else {
      const newRecord = {
        id: Math.max(...records.map((r) => r.id)) + 1,
        ...formData,
        ttl: parseInt(formData.ttl),
        priority: formData.priority ? parseInt(formData.priority) : undefined,
        weight: formData.weight ? parseInt(formData.weight) : undefined,
        port: formData.port ? parseInt(formData.port) : undefined,
        status: 'pending',
      }
      setRecords((prev) => [...prev, newRecord])
      setAlert({ type: 'success', message: 'DNS record created successfully!' })
    }
    handleCloseModal()
    setTimeout(() => setAlert(null), 3000)
  }

  const handleDeleteClick = (record) => {
    setDeleteRecord(record)
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    setRecords((prev) => prev.filter((r) => r.id !== deleteRecord.id))
    setShowDeleteModal(false)
    setDeleteRecord(null)
    setAlert({ type: 'success', message: 'DNS record deleted successfully!' })
    setTimeout(() => setAlert(null), 3000)
  }

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.value.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === '' || record.type === filterType
    return matchesSearch && matchesType
  })

  const showPriorityField = ['MX', 'SRV'].includes(formData.type)
  const showSRVFields = formData.type === 'SRV'

  return (
    <CRow>
      <CCol xs={12}>
        {alert && (
          <CAlert color={alert.type} dismissible onClose={() => setAlert(null)}>
            {alert.message}
          </CAlert>
        )}
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <strong>DNS Records</strong> <small>Manage your domain DNS records</small>
            </div>
            <CButton color="primary" onClick={() => handleOpenModal()}>
              <CIcon icon={cilPlus} className="me-2" />
              Add Record
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CRow className="mb-3">
              <CCol md={6}>
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilSearch} />
                  </CInputGroupText>
                  <CFormInput
                    placeholder="Search by name or value..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CInputGroup>
              </CCol>
              <CCol md={3}>
                <CFormSelect value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                  <option value="">All Record Types</option>
                  {recordTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </CFormSelect>
              </CCol>
            </CRow>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Type</CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Value</CTableHeaderCell>
                  <CTableHeaderCell>TTL</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredRecords.map((record) => (
                  <CTableRow key={record.id}>
                    <CTableDataCell>{getTypeBadge(record.type)}</CTableDataCell>
                    <CTableDataCell>
                      <code>{record.name}</code>
                    </CTableDataCell>
                    <CTableDataCell>
                      <span className="text-truncate d-inline-block" style={{ maxWidth: '300px' }}>
                        {record.priority && `${record.priority} `}
                        {record.weight && record.port && `${record.weight} ${record.port} `}
                        {record.value}
                      </span>
                    </CTableDataCell>
                    <CTableDataCell>{record.ttl}s</CTableDataCell>
                    <CTableDataCell>{getStatusBadge(record.status)}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenModal(record)}
                        className="me-2"
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton
                        color="danger"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(record)}
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
                {filteredRecords.length === 0 && (
                  <CTableRow>
                    <CTableDataCell colSpan={6} className="text-center text-muted py-4">
                      No DNS records found
                    </CTableDataCell>
                  </CTableRow>
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      <CModal visible={showModal} onClose={handleCloseModal} size="lg">
        <CModalHeader>
          <CModalTitle>{editingRecord ? 'Edit DNS Record' : 'Add DNS Record'}</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={handleSubmit}>
          <CModalBody>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormLabel htmlFor="type">Record Type</CFormLabel>
                <CFormSelect
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  {recordTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </CFormSelect>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="ttl">TTL (seconds)</CFormLabel>
                <CFormSelect id="ttl" name="ttl" value={formData.ttl} onChange={handleInputChange}>
                  <option value={300}>5 minutes (300)</option>
                  <option value={900}>15 minutes (900)</option>
                  <option value={1800}>30 minutes (1800)</option>
                  <option value={3600}>1 hour (3600)</option>
                  <option value={14400}>4 hours (14400)</option>
                  <option value={43200}>12 hours (43200)</option>
                  <option value={86400}>1 day (86400)</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="@ for root, or subdomain name"
                  required
                />
                <small className="text-muted">
                  Use @ for the root domain, or enter a subdomain name (e.g., www, mail)
                </small>
              </CCol>
            </CRow>
            {showPriorityField && (
              <CRow className="mb-3">
                <CCol md={showSRVFields ? 4 : 12}>
                  <CFormLabel htmlFor="priority">Priority</CFormLabel>
                  <CFormInput
                    type="number"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    placeholder="10"
                    required
                  />
                </CCol>
                {showSRVFields && (
                  <>
                    <CCol md={4}>
                      <CFormLabel htmlFor="weight">Weight</CFormLabel>
                      <CFormInput
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="60"
                        required
                      />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel htmlFor="port">Port</CFormLabel>
                      <CFormInput
                        type="number"
                        id="port"
                        name="port"
                        value={formData.port}
                        onChange={handleInputChange}
                        placeholder="5060"
                        required
                      />
                    </CCol>
                  </>
                )}
              </CRow>
            )}
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel htmlFor="value">Value</CFormLabel>
                <CFormInput
                  type="text"
                  id="value"
                  name="value"
                  value={formData.value}
                  onChange={handleInputChange}
                  placeholder={
                    formData.type === 'A'
                      ? 'IPv4 address (e.g., 192.168.1.1)'
                      : formData.type === 'AAAA'
                        ? 'IPv6 address'
                        : formData.type === 'CNAME'
                          ? 'Target hostname'
                          : formData.type === 'MX'
                            ? 'Mail server hostname'
                            : formData.type === 'TXT'
                              ? 'Text value'
                              : 'Value'
                  }
                  required
                />
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={handleCloseModal}>
              Cancel
            </CButton>
            <CButton color="primary" type="submit">
              {editingRecord ? 'Update Record' : 'Add Record'}
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>

      <CModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <CModalHeader>
          <CModalTitle>Confirm Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete this DNS record?
          {deleteRecord && (
            <div className="mt-3 p-3 bg-light rounded">
              <strong>Type:</strong> {deleteRecord.type}
              <br />
              <strong>Name:</strong> {deleteRecord.name}
              <br />
              <strong>Value:</strong> {deleteRecord.value}
            </div>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </CButton>
          <CButton color="danger" onClick={handleConfirmDelete}>
            Delete Record
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default DNSRecords
