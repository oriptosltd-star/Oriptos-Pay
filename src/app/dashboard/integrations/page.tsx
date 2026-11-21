import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { getMerchantProfile } from "@/lib/actions/dashboard";

export default async function IntegrationsPage() {
  const merchant = await getMerchantProfile();
  
  const providers = [
    {
      id: "stripe",
      name: "Stripe",
      description: "Accept credit cards, Apple Pay, and Google Pay with instant payouts.",
      logo: "S", 
      color: "bg-[#635BFF]",
      connected: merchant?.charges_enabled,
      recommended: true,
      action: "/api/stripe/authorize" 
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Accept PayPal wallet and credit card payments securely.",
      logo: "P",
      color: "bg-[#003087]",
      connected: false,
      recommended: false,
      comingSoon: true
    },
    {
      id: "paddle",
      name: "Paddle",
      description: "Complete payments, tax, and subscription management.",
      logo: "Pd",
      color: "bg-[#FF4D4D]",
      connected: false,
      recommended: false,
      comingSoon: true
    },
    {
      id: "razorpay",
      name: "Razorpay",
      description: "Comprehensive payment solutions for India and global markets.",
      logo: "R",
      color: "bg-[#0C2F54]",
      connected: false,
      recommended: false,
      comingSoon: true
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Integrations</h2>
        <p className="text-muted-foreground">Connect payment providers to start accepting payments.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((provider) => (
          <Card key={provider.id} className="relative overflow-hidden flex flex-col">
            {provider.recommended && (
                 <div className="absolute top-0 right-0 bg-zinc-900 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                    Recommended
                 </div>
            )}
            <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg ${provider.color} flex items-center justify-center text-white font-bold text-xl mb-2 shadow-sm`}>
                    {provider.logo}
                </div>
                <CardTitle className="text-xl flex items-center gap-2">
                    {provider.name}
                    {provider.connected && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                </CardTitle>
                <CardDescription className="h-10">
                    {provider.description}
                </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto pt-4 border-t bg-muted/20">
                {provider.connected ? (
                    <div className="w-full">
                         <Button variant="outline" className="w-full text-green-700 border-green-200 bg-green-50 hover:bg-green-100 hover:text-green-800 pointer-events-none">
                            <CheckCircle2 className="mr-2 h-4 w-4" /> Connected
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-2">Active & processing</p>
                    </div>
                ) : provider.comingSoon ? (
                     <Button variant="secondary" className="w-full" disabled>
                        Coming Soon
                    </Button>
                ) : (
                    <form action={provider.action} className="w-full">
                        <Button className="w-full" type="submit">
                            Connect {provider.name}
                        </Button>
                    </form>
                )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
