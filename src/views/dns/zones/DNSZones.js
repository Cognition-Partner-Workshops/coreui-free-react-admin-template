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
  CFormTextarea,
  CBadge,
  CAlert,
  CInputGroup,
  CInputGroupText,
  CProgress,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPlus,
  cilPencil,
  cilTrash,
  cilSearch,
  cilSettings,
  cilCloudDownload,
} from '@coreui/icons'

const initialZones = [
  {
    id: 1,
    domain: 'example.com',
    status: 'active',
    recordCount: 12,
    nameservers: ['ns1.example.com', 'ns2.example.com'],
    dnssec: true,
    createdAt: '2024-01-15',
    lastModified: '2024-12-20',
  },
  {
    id: 2,
    domain: 'mysite.org',
    status: 'active',
    recordCount: 8,
    nameservers: ['ns1.mysite.org', 'ns2.mysite.org'],
    dnssec: false,
    createdAt: '2024-03-22',
    lastModified: '2024-11-15',
  },
  {
    id: 3,
    domain: 'testdomain.net',
    status: 'pending',
    recordCount: 3,
    nameservers: ['ns1.testdomain.net', 'ns2.testdomain.net'],
    dnssec: false,
    createdAt: '2024-12-01',
    lastModified: '2024-12-01',
  },
  {
    id: 4,
    domain: 'corporate.io',
    status: 'active',
    recordCount: 25,
    nameservers: ['ns1.corporate.io', 'ns2.corporate.io'],
    dnssec: true,
    createdAt: '2023-06-10',
    lastModified: '2024-12-18',
  },
]

const getStatusBadge = (status) => {
  switch (status) {
    case 'active':
      return <CBadge color="success">Active</CBadge>
    case 'pending':
      return <CBadge color="warning">Pending</CBadge>
    case 'suspended':
      return <CBadge color="danger">Suspended</CBadge>
    case 'expired':
      return <CBadge color="secondary">Expired</CBadge>
    default:
      return <CBadge color="secondary">Unknown</CBadge>
  }
}

const DNSZones = () => {
  const [zones, setZones] = useState(initialZones)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [editingZone, setEditingZone] = useState(null)
  const [deleteZone, setDeleteZone] = useState(null)
  const [settingsZone, setSettingsZone] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [alert, setAlert] = useState(null)
  const [formData, setFormData] = useState({
    domain: '',
    nameservers: '',
  })

  const handleOpenModal = (zone = null) => {
    if (zone) {
      setEditingZone(zone)
      setFormData({
        domain: zone.domain,
        nameservers: zone.nameservers.join('\n'),
      })
    } else {
      setEditingZone(null)
      setFormData({
        domain: '',
        nameservers: '',
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingZone(null)
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
    const nameserversList = formData.nameservers
      .split('\n')
      .map((ns) => ns.trim())
      .filter((ns) => ns)

    if (editingZone) {
      setZones((prev) =>
        prev.map((z) =>
          z.id === editingZone.id
            ? {
                ...z,
                domain: formData.domain,
                nameservers: nameserversList,
                lastModified: new Date().toISOString().split('T')[0],
              }
            : z,
        ),
      )
      setAlert({ type: 'success', message: 'DNS zone updated successfully!' })
    } else {
      const newZone = {
        id: Math.max(...zones.map((z) => z.id)) + 1,
        domain: formData.domain,
        status: 'pending',
        recordCount: 0,
        nameservers:
          nameserversList.length > 0
            ? nameserversList
            : [`ns1.${formData.domain}`, `ns2.${formData.domain}`],
        dnssec: false,
        createdAt: new Date().toISOString().split('T')[0],
        lastModified: new Date().toISOString().split('T')[0],
      }
      setZones((prev) => [...prev, newZone])
      setAlert({ type: 'success', message: 'DNS zone created successfully!' })
    }
    handleCloseModal()
    setTimeout(() => setAlert(null), 3000)
  }

  const handleDeleteClick = (zone) => {
    setDeleteZone(zone)
    setShowDeleteModal(true)
  }

  const handleConfirmDelete = () => {
    setZones((prev) => prev.filter((z) => z.id !== deleteZone.id))
    setShowDeleteModal(false)
    setDeleteZone(null)
    setAlert({ type: 'success', message: 'DNS zone deleted successfully!' })
    setTimeout(() => setAlert(null), 3000)
  }

  const handleSettingsClick = (zone) => {
    setSettingsZone(zone)
    setShowSettingsModal(true)
  }

  const handleToggleDNSSEC = () => {
    setZones((prev) =>
      prev.map((z) =>
        z.id === settingsZone.id
          ? {
              ...z,
              dnssec: !z.dnssec,
              lastModified: new Date().toISOString().split('T')[0],
            }
          : z,
      ),
    )
    setSettingsZone((prev) => ({ ...prev, dnssec: !prev.dnssec }))
    setAlert({
      type: 'success',
      message: `DNSSEC ${settingsZone.dnssec ? 'disabled' : 'enabled'} successfully!`,
    })
    setTimeout(() => setAlert(null), 3000)
  }

  const filteredZones = zones.filter((zone) => {
    const matchesSearch = zone.domain.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === '' || zone.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const totalRecords = zones.reduce((sum, zone) => sum + zone.recordCount, 0)
  const activeZones = zones.filter((z) => z.status === 'active').length
  const dnssecEnabled = zones.filter((z) => z.dnssec).length

  return (
    <CRow>
      <CCol xs={12}>
        {alert && (
          <CAlert color={alert.type} dismissible onClose={() => setAlert(null)}>
            {alert.message}
          </CAlert>
        )}

        <CRow className="mb-4">
          <CCol sm={6} lg={3}>
            <CCard className="text-white bg-primary">
              <CCardBody className="pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">{zones.length}</div>
                  <div>Total Zones</div>
                </div>
              </CCardBody>
              <CProgress className="mt-3" color="white" value={100} height={4} />
            </CCard>
          </CCol>
          <CCol sm={6} lg={3}>
            <CCard className="text-white bg-success">
              <CCardBody className="pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">{activeZones}</div>
                  <div>Active Zones</div>
                </div>
              </CCardBody>
              <CProgress
                className="mt-3"
                color="white"
                value={(activeZones / zones.length) * 100}
                height={4}
              />
            </CCard>
          </CCol>
          <CCol sm={6} lg={3}>
            <CCard className="text-white bg-info">
              <CCardBody className="pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">{totalRecords}</div>
                  <div>Total Records</div>
                </div>
              </CCardBody>
              <CProgress className="mt-3" color="white" value={75} height={4} />
            </CCard>
          </CCol>
          <CCol sm={6} lg={3}>
            <CCard className="text-white bg-warning">
              <CCardBody className="pb-0 d-flex justify-content-between align-items-start">
                <div>
                  <div className="fs-4 fw-semibold">{dnssecEnabled}</div>
                  <div>DNSSEC Enabled</div>
                </div>
              </CCardBody>
              <CProgress
                className="mt-3"
                color="white"
                value={(dnssecEnabled / zones.length) * 100}
                height={4}
              />
            </CCard>
          </CCol>
        </CRow>

        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <strong>DNS Zones</strong> <small>Manage your domain zones</small>
            </div>
            <CButton color="primary" onClick={() => handleOpenModal()}>
              <CIcon icon={cilPlus} className="me-2" />
              Add Zone
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
                    placeholder="Search by domain name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CInputGroup>
              </CCol>
              <CCol md={3}>
                <CFormSelect value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value="">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="suspended">Suspended</option>
                  <option value="expired">Expired</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Domain</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                  <CTableHeaderCell>Records</CTableHeaderCell>
                  <CTableHeaderCell>DNSSEC</CTableHeaderCell>
                  <CTableHeaderCell>Last Modified</CTableHeaderCell>
                  <CTableHeaderCell>Actions</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredZones.map((zone) => (
                  <CTableRow key={zone.id}>
                    <CTableDataCell>
                      <strong>{zone.domain}</strong>
                      <br />
                      <small className="text-muted">
                        NS: {zone.nameservers.slice(0, 2).join(', ')}
                      </small>
                    </CTableDataCell>
                    <CTableDataCell>{getStatusBadge(zone.status)}</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="secondary">{zone.recordCount}</CBadge>
                    </CTableDataCell>
                    <CTableDataCell>
                      {zone.dnssec ? (
                        <CBadge color="success">Enabled</CBadge>
                      ) : (
                        <CBadge color="secondary">Disabled</CBadge>
                      )}
                    </CTableDataCell>
                    <CTableDataCell>{zone.lastModified}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenModal(zone)}
                        className="me-1"
                        title="Edit Zone"
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton
                        color="secondary"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleSettingsClick(zone)}
                        className="me-1"
                        title="Zone Settings"
                      >
                        <CIcon icon={cilSettings} />
                      </CButton>
                      <CButton
                        color="danger"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(zone)}
                        title="Delete Zone"
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
                {filteredZones.length === 0 && (
                  <CTableRow>
                    <CTableDataCell colSpan={6} className="text-center text-muted py-4">
                      No DNS zones found
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
          <CModalTitle>{editingZone ? 'Edit DNS Zone' : 'Add DNS Zone'}</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={handleSubmit}>
          <CModalBody>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel htmlFor="domain">Domain Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="domain"
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  placeholder="example.com"
                  required
                  disabled={!!editingZone}
                />
                <small className="text-muted">Enter the domain name without http:// or www</small>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel htmlFor="nameservers">Nameservers (one per line)</CFormLabel>
                <CFormTextarea
                  id="nameservers"
                  name="nameservers"
                  value={formData.nameservers}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="ns1.example.com&#10;ns2.example.com"
                />
                <small className="text-muted">
                  Leave empty to use default nameservers (ns1.domain.com, ns2.domain.com)
                </small>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={handleCloseModal}>
              Cancel
            </CButton>
            <CButton color="primary" type="submit">
              {editingZone ? 'Update Zone' : 'Add Zone'}
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>

      <CModal visible={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <CModalHeader>
          <CModalTitle>Confirm Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CAlert color="danger">
            <strong>Warning:</strong> This action cannot be undone. All DNS records associated with
            this zone will be permanently deleted.
          </CAlert>
          Are you sure you want to delete this DNS zone?
          {deleteZone && (
            <div className="mt-3 p-3 bg-light rounded">
              <strong>Domain:</strong> {deleteZone.domain}
              <br />
              <strong>Records:</strong> {deleteZone.recordCount}
              <br />
              <strong>Status:</strong> {deleteZone.status}
            </div>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </CButton>
          <CButton color="danger" onClick={handleConfirmDelete}>
            Delete Zone
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal visible={showSettingsModal} onClose={() => setShowSettingsModal(false)} size="lg">
        <CModalHeader>
          <CModalTitle>Zone Settings - {settingsZone?.domain}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {settingsZone && (
            <>
              <CCard className="mb-3">
                <CCardHeader>
                  <strong>DNSSEC Configuration</strong>
                </CCardHeader>
                <CCardBody>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-1">
                        <strong>Status:</strong>{' '}
                        {settingsZone.dnssec ? (
                          <CBadge color="success">Enabled</CBadge>
                        ) : (
                          <CBadge color="secondary">Disabled</CBadge>
                        )}
                      </p>
                      <small className="text-muted">
                        DNSSEC adds an extra layer of security to your domain by digitally signing
                        DNS records.
                      </small>
                    </div>
                    <CButton
                      color={settingsZone.dnssec ? 'danger' : 'success'}
                      onClick={handleToggleDNSSEC}
                    >
                      {settingsZone.dnssec ? 'Disable DNSSEC' : 'Enable DNSSEC'}
                    </CButton>
                  </div>
                </CCardBody>
              </CCard>

              <CCard className="mb-3">
                <CCardHeader>
                  <strong>Zone Information</strong>
                </CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol md={6}>
                      <p>
                        <strong>Created:</strong> {settingsZone.createdAt}
                      </p>
                      <p>
                        <strong>Last Modified:</strong> {settingsZone.lastModified}
                      </p>
                    </CCol>
                    <CCol md={6}>
                      <p>
                        <strong>Total Records:</strong> {settingsZone.recordCount}
                      </p>
                      <p>
                        <strong>Status:</strong> {getStatusBadge(settingsZone.status)}
                      </p>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>

              <CCard>
                <CCardHeader>
                  <strong>Nameservers</strong>
                </CCardHeader>
                <CCardBody>
                  <ul className="list-unstyled mb-0">
                    {settingsZone.nameservers.map((ns, index) => (
                      <li key={index} className="mb-2">
                        <code>{ns}</code>
                      </li>
                    ))}
                  </ul>
                </CCardBody>
              </CCard>
            </>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setShowSettingsModal(false)}>
            Close
          </CButton>
          <CButton color="primary">
            <CIcon icon={cilCloudDownload} className="me-2" />
            Export Zone File
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default DNSZones
