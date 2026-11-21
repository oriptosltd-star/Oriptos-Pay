import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function CustomersPage() {
  const customers = [
    { name: "Alice Smith", email: "alice@example.com", spent: "$1,250.00", lastOrder: "Oct 24" },
    { name: "Bob Jones", email: "bob@example.com", spent: "$450.00", lastOrder: "Oct 24" },
    { name: "Charlie Day", email: "charlie@example.com", spent: "$2,850.00", lastOrder: "Oct 23" },
    { name: "Dana White", email: "dana@example.com", spent: "$95.00", lastOrder: "Oct 22" },
    { name: "Eve Black", email: "eve@example.com", spent: "$3,400.00", lastOrder: "Oct 20" },
  ];

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground">View and manage your customer details.</p>
        </div>
        <Button>Add Customer</Button>
      </div>

      <Card>
        <CardHeader>
            <div className="flex items-center gap-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input className="pl-9" placeholder="Search customers..." />
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead className="text-right">Last Order</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {customers.map((c, i) => (
                        <TableRow key={i}>
                            <TableCell className="flex items-center gap-3 font-medium">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>{c.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                {c.name}
                            </TableCell>
                            <TableCell className="text-muted-foreground">{c.email}</TableCell>
                            <TableCell>{c.spent}</TableCell>
                            <TableCell className="text-right text-muted-foreground">{c.lastOrder}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
