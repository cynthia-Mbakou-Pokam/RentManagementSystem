import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Payments",
};

const invoices = [
  { id: "INV-2041", period: "May 2026", amount: 1850, status: "Due May 1" },
  { id: "INV-2018", period: "Apr 2026", amount: 1850, status: "Paid" },
  { id: "INV-1992", period: "Mar 2026", amount: 1850, status: "Paid" },
];

const history = [
  { date: "Apr 2, 2026", amount: 1850, method: "ACH" },
  { date: "Mar 3, 2026", amount: 1850, method: "Card" },
  { date: "Feb 1, 2026", amount: 1850, method: "ACH" },
];

export default function PaymentsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold text-rent-navy">Payments</h1>
      <p className="mt-2 text-sm text-muted">Pay rent online, invoices, history, and late-fee alerts.</p>

      <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-rent-navy">
        <strong>Late fee alert:</strong> May rent is due in 2 days. Pay before May 3 to avoid a $75
        late fee.
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Current balance</h2>
          <p className="mt-2 text-4xl font-bold text-rent-navy">$1,850.00</p>
          <p className="text-sm text-muted">Unit 4B · Sunlit 2BR</p>
          <ButtonLink href="/login" variant="primary" className="mt-6 w-full sm:w-auto">
            Pay rent
          </ButtonLink>
        </section>
        <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-rent-navy">Invoices</h2>
          <ul className="mt-4 divide-y divide-border text-sm">
            {invoices.map((inv) => (
              <li key={inv.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-rent-navy">{inv.id}</p>
                  <p className="text-muted">{inv.period}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${inv.amount.toLocaleString()}</p>
                  <p className="text-xs text-muted">{inv.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-rent-navy">Payment history</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="pb-2 font-medium">Date</th>
                <th className="pb-2 font-medium">Amount</th>
                <th className="pb-2 font-medium">Method</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h) => (
                <tr key={h.date} className="border-b border-border last:border-0">
                  <td className="py-3">{h.date}</td>
                  <td className="py-3 font-medium">${h.amount.toLocaleString()}</td>
                  <td className="py-3 text-muted">{h.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
