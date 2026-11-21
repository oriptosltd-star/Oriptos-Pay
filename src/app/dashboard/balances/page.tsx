import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Building2, Wallet } from "lucide-react";
import { getDashboardStats } from "@/lib/actions/dashboard";

export default async function BalancesPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Balances</h2>
          <p className="text-muted-foreground">View your payout schedules and available funds.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 text-white border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">
                Total Available Balance
              </CardTitle>
              <Wallet className="h-4 w-4 text-zinc-300" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats?.availableBalance || "$0.00"}</div>
              <p className="text-xs text-zinc-400 mt-1">
                Scheduled for instant payout
              </p>
              <div className="mt-8">
                 <Button variant="secondary" className="w-full sm:w-auto">
                    Payout Now <ArrowUpRight className="ml-2 h-4 w-4" />
                 </Button>
              </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pending from Stripe
              </CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats?.pendingPayouts || "$0.00"}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Rolling 2-day window
              </p>
              <div className="mt-8 grid gap-2">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Visa Direct •••• 4242</span>
                    <Badge variant="outline" className="text-green-600 bg-green-50">Active</Badge>
                </div>
              </div>
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Payout Schedule</CardTitle>
        </CardHeader>
        <CardContent>
             <div className="text-sm text-muted-foreground">
                No scheduled payouts upcoming. Funds transfer instantly on trigger.
             </div>
        </CardContent>
      </Card>
    </div>
  );
}
