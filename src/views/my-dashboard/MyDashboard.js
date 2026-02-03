import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CBadge,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilNewspaper, cilArrowTop, cilArrowBottom, cilMinus } from '@coreui/icons'

const MyDashboard = () => {
  const [newsLoading, setNewsLoading] = useState(true)
  const [stocksLoading, setStocksLoading] = useState(true)

  const newsData = [
    {
      id: 1,
      title: 'Tech Giants Report Strong Q4 Earnings',
      source: 'Financial Times',
      time: '2 hours ago',
      category: 'Business',
    },
    {
      id: 2,
      title: 'Federal Reserve Signals Interest Rate Decision',
      source: 'Reuters',
      time: '3 hours ago',
      category: 'Economy',
    },
    {
      id: 3,
      title: 'New AI Breakthrough Announced by Research Team',
      source: 'TechCrunch',
      time: '4 hours ago',
      category: 'Technology',
    },
    {
      id: 4,
      title: 'Global Markets Rally on Positive Economic Data',
      source: 'Bloomberg',
      time: '5 hours ago',
      category: 'Markets',
    },
    {
      id: 5,
      title: 'Renewable Energy Investments Reach Record High',
      source: 'The Guardian',
      time: '6 hours ago',
      category: 'Energy',
    },
    {
      id: 6,
      title: 'Major Merger Announced in Healthcare Sector',
      source: 'Wall Street Journal',
      time: '7 hours ago',
      category: 'Healthcare',
    },
  ]

  const stockData = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 185.92, change: 2.45, changePercent: 1.34 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 141.8, change: -0.85, changePercent: -0.6 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.91, change: 4.12, changePercent: 1.1 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 178.25, change: 1.89, changePercent: 1.07 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.5, change: -3.2, changePercent: -1.27 },
    { symbol: 'META', name: 'Meta Platforms', price: 474.99, change: 5.67, changePercent: 1.21 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 721.33, change: 12.45, changePercent: 1.76 },
    { symbol: 'JPM', name: 'JPMorgan Chase', price: 183.42, change: 0.0, changePercent: 0.0 },
  ]

  useEffect(() => {
    const newsTimer = setTimeout(() => setNewsLoading(false), 1000)
    const stocksTimer = setTimeout(() => setStocksLoading(false), 800)
    return () => {
      clearTimeout(newsTimer)
      clearTimeout(stocksTimer)
    }
  }, [])

  const getChangeIcon = (change) => {
    if (change > 0) return cilArrowTop
    if (change < 0) return cilArrowBottom
    return cilMinus
  }

  const getChangeColor = (change) => {
    if (change > 0) return 'success'
    if (change < 0) return 'danger'
    return 'secondary'
  }

  const getCategoryColor = (category) => {
    const colors = {
      Business: 'primary',
      Economy: 'info',
      Technology: 'success',
      Markets: 'warning',
      Energy: 'danger',
      Healthcare: 'dark',
    }
    return colors[category] || 'secondary'
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <h2 className="mb-4">My Dashboard</h2>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12} lg={8}>
          <CCard className="mb-4">
            <CCardHeader className="d-flex align-items-center">
              <CIcon icon={cilNewspaper} className="me-2" />
              <strong>Latest News</strong>
            </CCardHeader>
            <CCardBody>
              {newsLoading ? (
                <div className="text-center py-5">
                  <CSpinner color="primary" />
                  <p className="mt-2 text-body-secondary">Loading news...</p>
                </div>
              ) : (
                <CListGroup flush>
                  {newsData.map((news) => (
                    <CListGroupItem
                      key={news.id}
                      className="d-flex justify-content-between align-items-start py-3"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{news.title}</div>
                        <small className="text-body-secondary">
                          {news.source} - {news.time}
                        </small>
                      </div>
                      <CBadge color={getCategoryColor(news.category)} className="ms-2">
                        {news.category}
                      </CBadge>
                    </CListGroupItem>
                  ))}
                </CListGroup>
              )}
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs={12} lg={4}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Stock Tickers</strong>
            </CCardHeader>
            <CCardBody className="p-0">
              {stocksLoading ? (
                <div className="text-center py-5">
                  <CSpinner color="primary" />
                  <p className="mt-2 text-body-secondary">Loading stocks...</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Symbol</th>
                        <th className="text-end">Price</th>
                        <th className="text-end">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stockData.map((stock) => (
                        <tr key={stock.symbol}>
                          <td>
                            <div className="fw-bold">{stock.symbol}</div>
                            <small className="text-body-secondary">{stock.name}</small>
                          </td>
                          <td className="text-end align-middle">
                            <span className="fw-semibold">${stock.price.toFixed(2)}</span>
                          </td>
                          <td className="text-end align-middle">
                            <div
                              className={`d-flex align-items-center justify-content-end text-${getChangeColor(stock.change)}`}
                            >
                              <CIcon
                                icon={getChangeIcon(stock.change)}
                                size="sm"
                                className="me-1"
                              />
                              <span>
                                {stock.change > 0 ? '+' : ''}
                                {stock.change.toFixed(2)} ({stock.changePercent > 0 ? '+' : ''}
                                {stock.changePercent.toFixed(2)}%)
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CCardBody>
          </CCard>

          <CCard className="mb-4">
            <CCardHeader>
              <strong>Market Summary</strong>
            </CCardHeader>
            <CCardBody>
              <CRow className="text-center">
                <CCol xs={4}>
                  <div className="border-end">
                    <div className="text-body-secondary small">S&P 500</div>
                    <div className="fs-5 fw-semibold">4,927.93</div>
                    <div className="text-success small">
                      <CIcon icon={cilArrowTop} size="sm" /> +0.52%
                    </div>
                  </div>
                </CCol>
                <CCol xs={4}>
                  <div className="border-end">
                    <div className="text-body-secondary small">NASDAQ</div>
                    <div className="fs-5 fw-semibold">15,628.04</div>
                    <div className="text-success small">
                      <CIcon icon={cilArrowTop} size="sm" /> +0.83%
                    </div>
                  </div>
                </CCol>
                <CCol xs={4}>
                  <div>
                    <div className="text-body-secondary small">DOW</div>
                    <div className="fs-5 fw-semibold">38,654.42</div>
                    <div className="text-danger small">
                      <CIcon icon={cilArrowBottom} size="sm" /> -0.12%
                    </div>
                  </div>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MyDashboard
