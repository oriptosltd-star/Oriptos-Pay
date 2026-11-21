export default function TermsPage() {
  return (
    <div className="container mx-auto p-8 max-w-3xl prose">
      <h1>Terms of Service</h1>
      <p className="lead">Last Updated: {new Date().toLocaleDateString()}</p>

      <h2>1. Nature of Service</h2>
      <p>
        Upfinit Pay (&quot;the Platform&quot;) is strictly a software mediator that facilitates 
        data transmission between merchants and payment processors (specifically Stripe). 
        The Platform is <strong>not</strong> a payment processor, bank, or financial institution.
      </p>

      <h2>2. No Financial Liability</h2>
      <p>
        By using the Platform, you (&quot;the Merchant&quot;) acknowledge and agree that:
      </p>
      <ul>
        <li>You are the &quot;Merchant of Record&quot; for all transactions.</li>
        <li>You hold full financial liability for all chargebacks, refunds, and disputes.</li>
        <li>The Platform never takes possession of your funds (except for the agreed-upon application fee).</li>
        <li>Funds are settled directly to your connected Stripe account.</li>
      </ul>

      <h2>3. 2D Payment Risks</h2>
      <p>
        The Platform enables &quot;2D Secure&quot; (non-3DS) transactions to improve conversion and speed. 
        You acknowledge that disabling 3D Secure increases the risk of fraudulent transactions 
        and you accept full responsibility for any resulting losses.
      </p>

      <h2>4. Changes to Service</h2>
      <p>
        We reserve the right to modify or discontinue the service at any time.
      </p>
    </div>
  );
}
