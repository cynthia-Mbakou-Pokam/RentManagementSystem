import './style.css'

type LeaseStatus = 'Active' | 'Pending'

interface PropertyUnit {
  unit: string
  tenant: string
  monthlyRent: number
  dueDate: string
  status: LeaseStatus
}

const units: PropertyUnit[] = [
  { unit: 'A-101', tenant: 'Maria Soto', monthlyRent: 1400, dueDate: 'May 01', status: 'Active' },
  { unit: 'A-102', tenant: 'Vacant', monthlyRent: 1250, dueDate: '-', status: 'Pending' },
  { unit: 'B-201', tenant: 'Jordan Kim', monthlyRent: 1580, dueDate: 'May 05', status: 'Active' },
  { unit: 'B-202', tenant: 'Elena Cruz', monthlyRent: 1490, dueDate: 'May 02', status: 'Active' }
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('Root app element not found.')
}

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
})

const occupied = units.filter((unit) => unit.tenant !== 'Vacant').length
const expectedIncome = units.reduce((sum, unit) => sum + unit.monthlyRent, 0)

app.innerHTML = `
  <main class="dashboard">
    <header class="dashboard-header">
      <div>
        <p class="eyebrow">HouseControl</p>
        <h1>Rent Management</h1>
        <p class="subtitle">Track units, tenants, and monthly payments in one place.</p>
      </div>
      <button class="primary-button" type="button">+ Add tenant</button>
    </header>

    <section class="stats-grid">
      <article class="stat-card">
        <p class="label">Total Units</p>
        <p class="value">${units.length}</p>
      </article>
      <article class="stat-card">
        <p class="label">Occupied Units</p>
        <p class="value">${occupied}</p>
      </article>
      <article class="stat-card">
        <p class="label">Expected Income</p>
        <p class="value">${currency.format(expectedIncome)}</p>
      </article>
      <article class="stat-card">
        <p class="label">Collection Status</p>
        <p class="value value-ok">On Track</p>
      </article>
    </section>

    <section class="content-grid">
      <article class="panel">
        <div class="panel-header">
          <h2>Units Overview</h2>
          <button class="text-button" type="button">View all</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Unit</th>
              <th>Tenant</th>
              <th>Rent</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${units
              .map(
                (unit) => `
                <tr>
                  <td>${unit.unit}</td>
                  <td>${unit.tenant}</td>
                  <td>${currency.format(unit.monthlyRent)}</td>
                  <td>${unit.dueDate}</td>
                  <td><span class="badge ${unit.status === 'Active' ? 'badge-active' : 'badge-pending'}">${unit.status}</span></td>
                </tr>
              `
              )
              .join('')}
          </tbody>
        </table>
      </article>

      <aside class="panel">
        <h2>Upcoming Payments</h2>
        <ul class="payment-list">
          <li>
            <div>
              <p class="payment-tenant">Maria Soto</p>
              <p class="payment-date">Due May 01</p>
            </div>
            <p class="payment-amount">${currency.format(1400)}</p>
          </li>
          <li>
            <div>
              <p class="payment-tenant">Elena Cruz</p>
              <p class="payment-date">Due May 02</p>
            </div>
            <p class="payment-amount">${currency.format(1490)}</p>
          </li>
          <li>
            <div>
              <p class="payment-tenant">Jordan Kim</p>
              <p class="payment-date">Due May 05</p>
            </div>
            <p class="payment-amount">${currency.format(1580)}</p>
          </li>
        </ul>
      </aside>
    </section>
  </main>
`
