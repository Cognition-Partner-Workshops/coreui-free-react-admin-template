import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash, cilPlus, cilShieldAlt } from '@coreui/icons'

const defaultRoles = [
  {
    id: 1,
    name: 'Administrator',
    description: 'Full system access with all permissions',
    permissions: [
      'create',
      'read',
      'update',
      'delete',
      'manage_users',
      'manage_roles',
      'view_reports',
      'system_settings',
    ],
    color: 'danger',
  },
  {
    id: 2,
    name: 'Manager',
    description: 'Can manage users and view reports',
    permissions: ['create', 'read', 'update', 'manage_users', 'view_reports'],
    color: 'warning',
  },
  {
    id: 3,
    name: 'Editor',
    description: 'Can create and edit content',
    permissions: ['create', 'read', 'update'],
    color: 'info',
  },
  {
    id: 4,
    name: 'Viewer',
    description: 'Read-only access to content',
    permissions: ['read'],
    color: 'secondary',
  },
]

const availablePermissions = [
  { id: 'create', label: 'Create', description: 'Create new content' },
  { id: 'read', label: 'Read', description: 'View content' },
  { id: 'update', label: 'Update', description: 'Edit existing content' },
  { id: 'delete', label: 'Delete', description: 'Remove content' },
  { id: 'manage_users', label: 'Manage Users', description: 'Add, edit, and remove users' },
  { id: 'manage_roles', label: 'Manage Roles', description: 'Configure roles and permissions' },
  { id: 'view_reports', label: 'View Reports', description: 'Access analytics and reports' },
  { id: 'system_settings', label: 'System Settings', description: 'Configure system settings' },
]

const Roles = () => {
  const [roles, setRoles] = useState(defaultRoles)
  const [modalVisible, setModalVisible] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [editingRole, setEditingRole] = useState(null)
  const [roleToDelete, setRoleToDelete] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: [],
  })

  const handleOpenModal = (role = null) => {
    if (role) {
      setEditingRole(role)
      setFormData({
        name: role.name,
        description: role.description,
        permissions: [...role.permissions],
      })
    } else {
      setEditingRole(null)
      setFormData({
        name: '',
        description: '',
        permissions: [],
      })
    }
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
    setEditingRole(null)
    setFormData({
      name: '',
      description: '',
      permissions: [],
    })
  }

  const handlePermissionChange = (permissionId) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permissionId)
        ? prev.permissions.filter((p) => p !== permissionId)
        : [...prev.permissions, permissionId],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingRole) {
      setRoles((prev) =>
        prev.map((role) => (role.id === editingRole.id ? { ...role, ...formData } : role)),
      )
    } else {
      const newRole = {
        id: Math.max(...roles.map((r) => r.id)) + 1,
        ...formData,
        color: 'primary',
      }
      setRoles((prev) => [...prev, newRole])
    }
    handleCloseModal()
  }

  const handleDeleteClick = (role) => {
    setRoleToDelete(role)
    setDeleteModalVisible(true)
  }

  const handleConfirmDelete = () => {
    if (roleToDelete) {
      setRoles((prev) => prev.filter((role) => role.id !== roleToDelete.id))
    }
    setDeleteModalVisible(false)
    setRoleToDelete(null)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <CIcon icon={cilShieldAlt} className="me-2" />
              <strong>Role Management</strong>
            </div>
            <CButton color="primary" onClick={() => handleOpenModal()}>
              <CIcon icon={cilPlus} className="me-2" />
              Add New Role
            </CButton>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary mb-4">
              Manage user roles and their associated permissions. Roles define what actions users
              can perform within the system.
            </p>
            <CTable hover responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">Role Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Permissions</CTableHeaderCell>
                  <CTableHeaderCell scope="col" className="text-center">
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {roles.map((role) => (
                  <CTableRow key={role.id}>
                    <CTableDataCell>
                      <CBadge color={role.color} className="me-2">
                        {role.name}
                      </CBadge>
                    </CTableDataCell>
                    <CTableDataCell>{role.description}</CTableDataCell>
                    <CTableDataCell>
                      {role.permissions.map((perm) => (
                        <CBadge key={perm} color="light" textColor="dark" className="me-1 mb-1">
                          {availablePermissions.find((p) => p.id === perm)?.label || perm}
                        </CBadge>
                      ))}
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        className="me-2"
                        onClick={() => handleOpenModal(role)}
                        title="Edit Role"
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton
                        color="danger"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteClick(role)}
                        title="Delete Role"
                        disabled={role.name === 'Administrator'}
                      >
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      <CModal visible={modalVisible} onClose={handleCloseModal} size="lg">
        <CModalHeader>
          <CModalTitle>{editingRole ? 'Edit Role' : 'Create New Role'}</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={handleSubmit}>
          <CModalBody>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel htmlFor="roleName">Role Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="roleName"
                  placeholder="Enter role name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel htmlFor="roleDescription">Description</CFormLabel>
                <CFormInput
                  type="text"
                  id="roleDescription"
                  placeholder="Enter role description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={12}>
                <CFormLabel>Permissions</CFormLabel>
                <p className="text-body-secondary small mb-3">
                  Select the permissions that users with this role should have.
                </p>
                <CRow>
                  {availablePermissions.map((permission) => (
                    <CCol md={6} key={permission.id} className="mb-2">
                      <CFormCheck
                        id={`permission-${permission.id}`}
                        label={
                          <span>
                            <strong>{permission.label}</strong>
                            <br />
                            <small className="text-body-secondary">{permission.description}</small>
                          </span>
                        }
                        checked={formData.permissions.includes(permission.id)}
                        onChange={() => handlePermissionChange(permission.id)}
                      />
                    </CCol>
                  ))}
                </CRow>
              </CCol>
            </CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={handleCloseModal}>
              Cancel
            </CButton>
            <CButton color="primary" type="submit">
              {editingRole ? 'Save Changes' : 'Create Role'}
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>

      <CModal visible={deleteModalVisible} onClose={() => setDeleteModalVisible(false)}>
        <CModalHeader>
          <CModalTitle>Confirm Delete</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete the role <strong>{roleToDelete?.name}</strong>? This
          action cannot be undone.
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setDeleteModalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="danger" onClick={handleConfirmDelete}>
            Delete Role
          </CButton>
        </CModalFooter>
      </CModal>
    </CRow>
  )
}

export default Roles
