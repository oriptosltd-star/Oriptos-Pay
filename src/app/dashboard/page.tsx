import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { DollarSign, CreditCard, Activity } from "lucide-react"
import { getDashboardStats, getRecentTransactions } from "@/lib/actions/dashboard"
import Link from "next/link"

export default async function Dashboard() {
  const statsData = await getDashboardStats();
  const transactions = await getRecentTransactions(5);

  const stats = [
    {
      title: "Total Revenue",
      value: statsData?.totalVolume || "$0.00",
      change: "Lifetime Volume",
      icon: DollarSign,
    },
    {
      title: "Pending Payouts",
      value: statsData?.pendingPayouts || "$0.00",
      change: "On its way to bank",
      icon: Activity,
    },
    {
      title: "Sales (2D)",
      value: statsData?.salesCount?.toString() || "0",
      change: "Total Transactions",
      icon: CreditCard,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Area */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-7">
        
        {/* Recent Activity Table */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center h-24 text-muted-foreground">
                                No transactions yet.
                            </TableCell>
                        </TableRow>
                    ) : (
                        transactions.map((txn) => (
                            <TableRow key={txn.id}>
                                <TableCell className="font-medium">{txn.customer}</TableCell>
                                <TableCell>
                                    <Badge variant={txn.status === "succeeded" ? "default" : "secondary"}>
                                        {txn.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-muted-foreground text-sm">{txn.date}</TableCell>
                                <TableCell className="text-right font-medium">{txn.amount}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions / Integration Status */}
        <Card className="col-span-3">
             <CardHeader>
                <CardTitle>Integration Status</CardTitle>
             </CardHeader>
             <CardContent className="space-y-6">
                {statsData?.charges_enabled ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-4">
                        <div className="bg-green-100 p-2 rounded-full">
                            <CreditCard className="h-5 w-5 text-green-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-800">Stripe Connected</h4>
                            <p className="text-sm text-green-700 mt-1">
                                Your account is active and payouts are enabled.
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start space-x-4">
                        <div>
                            <h4 className="font-semibold text-amber-800">Pending Connection</h4>
                            <p className="text-sm text-amber-700 mt-1">
                                Connect Stripe to enable payments.
                            </p>
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    <label className="text-sm font-medium">Instant Payouts</label>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm text-muted-foreground">Visa Direct •••• 4242</span>
                        {statsData?.instant_payouts_enabled ? (
                             <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Active</Badge>
                        ) : (
                             <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">Pending</Badge>
                        )}
                       
                    </div>
                </div>

                <div className="pt-4">
                     <Link href="/dashboard/integrations">
                        <Button className="w-full" variant="outline">Manage Integrations</Button>
                     </Link>
                </div>
             </CardContent>
        </Card>
      </div>
    </div>
  )
}
