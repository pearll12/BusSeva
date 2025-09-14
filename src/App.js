import React, { useState } from 'react';
import { 
  Bus, 
  Users, 
  Route, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  MapPin, 
  Phone, 
  Eye,
  Edit3,
  Plus,
  Search,
  Filter,
  BarChart3,
  Clock,
  Star,
  UserCheck,
  Settings,
  Bell,
  Menu,
  X
} from 'lucide-react';

const BusSevaAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [buses] = useState([
    {
      id: 'BS001',
      number: 'UP 32 AB 1234',
      route: 'Delhi - Agra',
      driver: 'राम कुमार',
      status: 'active',
      occupancy: 85,
      lastUpdate: '2 mins ago',
      type: 'AC',
      rating: 4.2
    },
    {
      id: 'BS002',
      number: 'UP 14 CD 5678',
      route: 'Lucknow - Kanpur',
      driver: 'अमित शर्मा',
      status: 'maintenance',
      occupancy: 0,
      lastUpdate: '1 hour ago',
      type: 'Non-AC',
      rating: 3.8
    },
    {
      id: 'BS003',
      number: 'UP 25 EF 9012',
      route: 'Varanasi - Allahabad',
      driver: 'विजय सिंह',
      status: 'ghost',
      occupancy: 45,
      lastUpdate: '15 mins ago',
      type: 'AC',
      rating: 4.5
    }
  ]);

  const [drivers] = useState([
    {
      id: 'D001',
      name: 'राम कुमार',
      phone: '+91 9876543210',
      license: 'UP1234567890',
      verified: true,
      rating: 4.2,
      trips: 245,
      busId: 'BS001'
    },
    {
      id: 'D002',
      name: 'अमित शर्मा',
      phone: '+91 8765432109',
      license: 'UP0987654321',
      verified: false,
      rating: 3.8,
      trips: 123,
      busId: 'BS002'
    }
  ]);

  const [routes] = useState([
    {
      id: 'R001',
      name: 'Delhi - Agra Express',
      from: 'Delhi',
      to: 'Agra',
      distance: '233 km',
      duration: '4h 30m',
      fare: '₹450',
      stops: ['Delhi', 'Faridabad', 'Mathura', 'Agra']
    },
    {
      id: 'R002',
      name: 'Lucknow - Kanpur Local',
      from: 'Lucknow',
      to: 'Kanpur',
      distance: '78 km',
      duration: '2h 15m',
      fare: '₹180',
      stops: ['Lucknow', 'Unnao', 'Kanpur']
    }
  ]);

  const [alerts] = useState([
    {
      id: 1,
      type: 'ghost_bus',
      message: 'Bus UP 25 EF 9012 showing ghost activity - Location mismatch detected',
      time: '5 mins ago',
      severity: 'high'
    },
    {
      id: 2,
      type: 'malfunction',
      message: 'Engine issue reported for Bus UP 14 CD 5678',
      time: '1 hour ago',
      severity: 'medium'
    },
    {
      id: 3,
      type: 'harassment',
      message: 'Harassment report filed for Route R001',
      time: '2 hours ago',
      severity: 'high'
    }
  ]);

  const renderDashboard = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>BusSeva Dashboard</h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            backgroundColor: '#dc2626',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#b91c1c'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#dc2626'}>
            <Plus size={16} />
            <span>Add Bus</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderLeft: '4px solid #3b82f6' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 8px 0' }}>Total Buses</p>
              <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>24</p>
            </div>
            <Bus size={48} color="#3b82f6" />
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderLeft: '4px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 8px 0' }}>Active Drivers</p>
              <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>18</p>
            </div>
            <Users size={48} color="#10b981" />
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderLeft: '4px solid #f59e0b' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 8px 0' }}>Ghost Buses</p>
              <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#dc2626', margin: 0 }}>3</p>
            </div>
            <AlertTriangle size={48} color="#ef4444" />
          </div>
        </div>

        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderLeft: '4px solid #8b5cf6' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 8px 0' }}>Today's Revenue</p>
              <p style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>₹45K</p>
            </div>
            <BarChart3 size={48} color="#8b5cf6" />
          </div>
        </div>
      </div>

      {/* Live Bus Status */}
      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 16px 0' }}>
          <MapPin size={20} color="#dc2626" />
          Live Bus Status
        </h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Bus Number</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Route</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Driver</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Status</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Occupancy</th>
                <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Last Update</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px 16px', fontWeight: '500' }}>{bus.number}</td>
                  <td style={{ padding: '12px 16px' }}>{bus.route}</td>
                  <td style={{ padding: '12px 16px' }}>{bus.driver}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: bus.status === 'active' ? '#dcfce7' : bus.status === 'maintenance' ? '#fed7aa' : '#fecaca',
                      color: bus.status === 'active' ? '#166534' : bus.status === 'maintenance' ? '#9a3412' : '#991b1b'
                    }}>
                      {bus.status === 'ghost' ? 'GHOST BUS' : bus.status.toUpperCase()}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '64px', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px', position: 'relative' }}>
                        <div 
                          style={{
                            height: '8px',
                            borderRadius: '9999px',
                            backgroundColor: bus.occupancy > 80 ? '#ef4444' : bus.occupancy > 50 ? '#f59e0b' : '#10b981',
                            width: `${bus.occupancy}%`
                          }}
                        ></div>
                      </div>
                      <span style={{ fontSize: '14px' }}>{bus.occupancy}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#6b7280' }}>{bus.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Alerts */}
      <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', margin: '0 0 16px 0' }}>
          <Bell size={20} color="#dc2626" />
          Recent Alerts
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {alerts.map((alert) => (
            <div key={alert.id} style={{
              padding: '16px',
              borderRadius: '8px',
              borderLeft: '4px solid',
              borderLeftColor: alert.severity === 'high' ? '#ef4444' : alert.severity === 'medium' ? '#f59e0b' : '#eab308',
              backgroundColor: alert.severity === 'high' ? '#fef2f2' : alert.severity === 'medium' ? '#fff7ed' : '#fefce8'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertTriangle size={16} color={alert.severity === 'high' ? '#ef4444' : '#f59e0b'} />
                  <span style={{ fontWeight: '500' }}>{alert.message}</span>
                </div>
                <span style={{ fontSize: '14px', color: '#6b7280' }}>{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBusManagement = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Bus Management</h1>
        <button style={{
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: 'none',
          cursor: 'pointer'
        }}>
          <Plus size={16} />
          <span>Add Route</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
        {routes.map((route) => (
          <div key={route.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{route.name}</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Edit3 size={16} />
                </button>
                <button style={{ color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <Eye size={16} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Route:</span>
                <span style={{ fontWeight: '500' }}>{route.from} → {route.to}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Distance:</span>
                <span style={{ fontWeight: '500' }}>{route.distance}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Duration:</span>
                <span style={{ fontWeight: '500' }}>{route.duration}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: '#6b7280' }}>Fare:</span>
                <span style={{ fontWeight: '500', color: '#10b981' }}>{route.fare}</span>
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Stops:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {route.stops.map((stop, index) => (
                  <span key={index} style={{
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    padding: '4px 8px',
                    borderRadius: '9999px',
                    fontSize: '12px'
                  }}>
                    {stop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  // Add these two functions to your BusSevaAdminDashboard component:

const renderDriverManagement = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Driver Management</h1>
      <button style={{
        backgroundColor: '#dc2626',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        border: 'none',
        cursor: 'pointer'
      }}>
        <Plus size={16} />
        <span>Add Driver</span>
      </button>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
      {drivers.map((driver) => (
        <div key={driver.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={24} color="#6b7280" />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{driver.name}</h3>
                <p style={{ color: '#6b7280', margin: 0, fontSize: '14px' }}>ID: {driver.id}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {driver.verified ? (
                <CheckCircle size={20} color="#10b981" />
              ) : (
                <XCircle size={20} color="#ef4444" />
              )}
              <span style={{
                padding: '4px 8px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: driver.verified ? '#dcfce7' : '#fecaca',
                color: driver.verified ? '#166534' : '#991b1b'
              }}>
                {driver.verified ? 'VERIFIED' : 'UNVERIFIED'}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={16} color="#6b7280" />
              <span style={{ color: '#6b7280' }}>Phone:</span>
              <span style={{ fontWeight: '500' }}>{driver.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserCheck size={16} color="#6b7280" />
              <span style={{ color: '#6b7280' }}>License:</span>
              <span style={{ fontWeight: '500' }}>{driver.license}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star size={16} color="#f59e0b" />
              <span style={{ color: '#6b7280' }}>Rating:</span>
              <span style={{ fontWeight: '500', color: '#f59e0b' }}>{driver.rating}/5</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Route size={16} color="#6b7280" />
              <span style={{ color: '#6b7280' }}>Total Trips:</span>
              <span style={{ fontWeight: '500' }}>{driver.trips}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bus size={16} color="#6b7280" />
              <span style={{ color: '#6b7280' }}>Assigned Bus:</span>
              <span style={{ fontWeight: '500' }}>{driver.busId}</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', marginTop: '16px', justifyContent: 'flex-end' }}>
            <button style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: 'white',
              color: '#374151',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Eye size={14} />
              View Details
            </button>
            <button style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              backgroundColor: 'white',
              color: '#374151',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Edit3 size={14} />
              Edit
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const renderRouteManagement = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Route Management</h1>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button style={{
          backgroundColor: 'white',
          color: '#374151',
          padding: '8px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: '1px solid #d1d5db',
          cursor: 'pointer'
        }}>
          <Search size={16} />
          <span>Search Routes</span>
        </button>
        <button style={{
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          border: 'none',
          cursor: 'pointer'
        }}>
          <Plus size={16} />
          <span>Add Route</span>
        </button>
      </div>
    </div>

    {/* Route Statistics */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Route size={20} color="#3b82f6" />
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Total Routes</span>
        </div>
        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0 0 0' }}>{routes.length}</p>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MapPin size={20} color="#10b981" />
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Active Routes</span>
        </div>
        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0 0 0' }}>{routes.length}</p>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Clock size={20} color="#f59e0b" />
          <span style={{ color: '#6b7280', fontSize: '14px' }}>Avg Duration</span>
        </div>
        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0 0 0' }}>3h 22m</p>
      </div>
    </div>

    {/* Routes Table */}
    <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', margin: '0 0 16px 0' }}>All Routes</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Route ID</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Route Name</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>From - To</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Distance</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Duration</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Fare</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Stops</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: '600' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route) => (
              <tr key={route.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '12px 16px', fontWeight: '500' }}>{route.id}</td>
                <td style={{ padding: '12px 16px' }}>{route.name}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>{route.from}</span>
                    <span style={{ color: '#6b7280' }}>→</span>
                    <span>{route.to}</span>
                  </div>
                </td>
                <td style={{ padding: '12px 16px' }}>{route.distance}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} color="#6b7280" />
                    <span>{route.duration}</span>
                  </div>
                </td>
                <td style={{ padding: '12px 16px', fontWeight: '600', color: '#10b981' }}>{route.fare}</td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{
                    backgroundColor: '#f3f4f6',
                    color: '#374151',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {route.stops.length} stops
                  </span>
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                      color: '#2563eb',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px'
                    }}>
                      <Eye size={16} />
                    </button>
                    <button style={{
                      color: '#059669',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '4px'
                    }}>
                      <Edit3 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Route Details Cards */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
      {routes.map((route) => (
        <div key={route.id} style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0 }}>{route.name}</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ color: '#2563eb', background: 'none', border: 'none', cursor: 'pointer' }}>
                <Edit3 size={16} />
              </button>
              <button style={{ color: '#6b7280', background: 'none', border: 'none', cursor: 'pointer' }}>
                <Eye size={16} />
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>Route:</span>
              <span style={{ fontWeight: '500' }}>{route.from} → {route.to}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>Distance:</span>
              <span style={{ fontWeight: '500' }}>{route.distance}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>Duration:</span>
              <span style={{ fontWeight: '500' }}>{route.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ color: '#6b7280' }}>Fare:</span>
              <span style={{ fontWeight: '500', color: '#10b981' }}>{route.fare}</span>
            </div>
          </div>

          <div style={{ marginTop: '16px' }}>
            <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Stops ({route.stops.length}):</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {route.stops.map((stop, index) => (
                <span key={index} style={{
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  padding: '4px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  position: 'relative'
                }}>
                  {index + 1}. {stop}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
  const sidebar = (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      width: '256px',
      backgroundColor: 'white',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 50
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#dc2626', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bus size={20} color="white" />
          </div>
          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>BusSeva</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(false)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: window.innerWidth < 1024 ? 'block' : 'none' }}
        >
          <X size={24} color="#6b7280" />
        </button>
      </div>

      <nav style={{ marginTop: '24px', padding: '0 16px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'buses', label: 'Bus Management', icon: Bus },
            { id: 'drivers', label: 'Driver Management', icon: Users },
            { id: 'routes', label: 'Route Management', icon: Route },
            { id: 'alerts', label: 'Alerts & Reports', icon: Bell },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: activeTab === item.id ? '#fef2f2' : 'transparent',
                  color: activeTab === item.id ? '#dc2626' : '#6b7280',
                  borderRight: activeTab === item.id ? '2px solid #dc2626' : 'none'
                }}
                onMouseOver={(e) => {
                  if (activeTab !== item.id) {
                    e.target.style.backgroundColor = '#f3f4f6';
                    e.target.style.color = '#1f2937';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeTab !== item.id) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#6b7280';
                  }
                }}
              >
                <item.icon size={20} />
                <span style={{ fontWeight: '500' }}>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'buses':
        return renderBusManagement();
      case 'drivers':
        return renderDriverManagement();
      case 'routes':
        return renderRouteManagement();
      case 'alerts':
        return (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px', margin: '0 0 24px 0' }}>Alerts & Reports</h1>
            <p style={{ color: '#6b7280', margin: 0 }}>Alert management system coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '24px' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', marginBottom: '24px', margin: '0 0 24px 0' }}>Settings</h1>
            <p style={{ color: '#6b7280', margin: 0 }}>System settings panel coming soon...</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {sidebar}
      
      <div style={{ 
        marginLeft: sidebarOpen && window.innerWidth >= 1024 ? '256px' : '0',
        transition: 'margin-left 0.3s ease-in-out'
      }}>
        <header style={{ backgroundColor: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #e5e7eb', padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', display: window.innerWidth < 1024 ? 'block' : 'none' }}
              >
                <Menu size={24} color="#6b7280" />
              </button>
              <div>
                <p style={{ color: '#6b7280', margin: 0 }}>Welcome back, Admin</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ position: 'relative' }}>
                <Bell size={24} color="#6b7280" />
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  backgroundColor: '#ef4444',
                  color: 'white',
                  fontSize: '12px',
                  borderRadius: '9999px',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  3
                </div>
              </div>
              <div style={{ width: '32px', height: '32px', backgroundColor: '#dc2626', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontWeight: '500', fontSize: '14px' }}>A</span>
              </div>
            </div>
          </div>
        </header>

        <main style={{ padding: '24px' }}>
          {renderContent()}
        </main>
      </div>

      {sidebarOpen && window.innerWidth < 1024 && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default BusSevaAdminDashboard;
         