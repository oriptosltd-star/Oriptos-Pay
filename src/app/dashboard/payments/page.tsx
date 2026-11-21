import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, Download } from "lucide-react";
import { getAllTransactions } from "@/lib/actions/dashboard";

export default async function PaymentsPage() {
  const transactions = await getAllTransactions();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payments</h2>
          <p className="text-muted-foreground">Manage your transaction history and refunds.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" /> Export
            </Button>
            <Button size="sm">Create Payment</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
             <div className="flex items-center justify-between">
                <CardTitle>All Transactions</CardTitle>
                <div className="flex items-center gap-2">
                    <Input placeholder="Filter payments..." className="h-8 w-[150px] lg:w-[250px]" />
                    <Button variant="outline" size="icon" className="h-8 w-8">
                        <Filter className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.length === 0 ? (
                  <TableRow>
                      <TableCell colSpan={5} className="text-center h-24 text-muted-foreground">
                          No transactions found.
                      </TableCell>
                  </TableRow>
              ) : (
                  transactions.map((txn) => (
                    <TableRow key={txn.id}>
                      <TableCell className="font-medium">{txn.amount}</TableCell>
                      <TableCell>
                        <Badge variant={txn.status === "succeeded" ? "default" : "secondary"}>
                          {txn.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{txn.customer}</TableCell>
                      <TableCell className="text-muted-foreground">{txn.date}</TableCell>
                      <TableCell className="text-right text-muted-foreground">{txn.method}</TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
