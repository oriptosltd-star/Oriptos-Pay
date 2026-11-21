import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>
      <Separator />
      
      <div className="grid gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Merchant Profile</CardTitle>
                <CardDescription>Update your store details shown to customers.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="store-name">Store Name</Label>
                    <Input id="store-name" defaultValue="Premium Merchant Store" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Support Email</Label>
                    <Input id="email" defaultValue="merchant@example.com" />
                </div>
                <div className="flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Stripe Connection</CardTitle>
                <CardDescription>Manage your connected Stripe account for payouts.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between border p-4 rounded-lg">
                    <div className="space-y-1">
                        <div className="font-medium">Stripe Account</div>
                        <div className="text-sm text-muted-foreground">Connected: acct_123456789</div>
                    </div>
                    <Button variant="outline">Manage in Stripe</Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
