import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: {
    index: false
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen px-4 py-12 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl space-y-8'>
        {/* Main Heading */}
        <h1 className='text-foreground text-3xl font-bold'>Privacy Policy</h1>

        {/* Introduction */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            Introduction
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Welcome to the Data Analyst Dashboard. This privacy policy explains
            how we collect, use, and protect your personal information when you
            use our application. We are committed to maintaining the privacy and
            security of your data.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            Information We Collect
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            We collect minimal information necessary to provide our services:
          </p>
          <ul className='text-muted-foreground mt-2 list-inside list-disc space-y-1'>
            <li>
              Account information provided during registration (email, name)
            </li>
            <li>Usage data and analytics for improving the application</li>
            <li>Data you voluntarily upload for analysis purposes</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            How We Use Your Information
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            Your information is used to:
          </p>
          <ul className='text-muted-foreground mt-2 list-inside list-disc space-y-1'>
            <li>Provide and maintain the dashboard functionality</li>
            <li>Authenticate your access to the application</li>
            <li>Process and analyze data you upload</li>
            <li>Improve and optimize the user experience</li>
          </ul>
        </section>

        {/* Data Security */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            Data Security
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction. Your data is encrypted and stored securely using
            industry-standard practices.
          </p>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            Data Sharing and Third Parties
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this policy. We use Clerk for authentication services,
            and they may process your data according to their privacy policy.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            Your Rights
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            You have the right to:
          </p>
          <ul className='text-muted-foreground mt-2 list-inside list-disc space-y-1'>
            <li>Access and review your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className='text-foreground mb-3 text-xl font-semibold'>
            Contact Us
          </h2>
          <p className='text-muted-foreground text-base leading-relaxed'>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at{' '}
            <a
              href='mailto:shivamgarg1515@gmail.com'
              className='text-primary font-medium hover:underline'
            >
              shivamgarg1515@gmail.com
            </a>
            .
          </p>
        </section>

        {/* Last Updated */}
        <div className='border-border border-t pt-4'>
          <p className='text-muted-foreground text-sm'>
            Last updated: March 2026
          </p>
        </div>
      </div>
    </div>
  );
}
