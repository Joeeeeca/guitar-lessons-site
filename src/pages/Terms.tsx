import { Helmet } from "react-helmet"

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | George Capon Guitar Lessons</title>
        <meta
          name="description"
          content="Terms and conditions for booking and attending online guitar lessons with George Capon."
        />
        <link
          rel="canonical"
          href="https://georgecaponguitarlessons.com/terms"
        />
      </Helmet>

      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <p className="text-muted-foreground mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 leading-relaxed text-lg">

          <p>
            These Terms outline how guitar lessons with <strong>George Capon</strong> are provided.  
            By booking or attending lessons, you agree to the following.
          </p>

          <h2 className="text-2xl font-semibold">1. Lessons</h2>
          <p>
            Lessons are delivered online and tailored to your goals.  
            You are responsible for ensuring a working internet connection,
            camera, and microphone.
          </p>

          <h2 className="text-2xl font-semibold">2. Booking & Cancellations</h2>
          <ul className="list-disc ml-6">
            <li>Lessons must be scheduled in advance.</li>
            <li>Please provide reasonable notice if cancelling or rescheduling.</li>
            <li>Missed lessons without notice may still be charged.</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Payments</h2>
          <p>
            Payment terms are discussed individually.  
            No payments are processed through this website.
          </p>

          <h2 className="text-2xl font-semibold">4. Lesson Materials</h2>
          <p>
            Any follow-up videos or materials sent (e.g., through WhatsApp) are for
            your personal use only. They must not be shared publicly without permission.
          </p>

          <h2 className="text-2xl font-semibold">5. Student Conduct</h2>
          <p>
            Students agree to communicate respectfully and attend lessons on time.
          </p>

          <h2 className="text-2xl font-semibold">6. Liability</h2>
          <p>
            I am not responsible for technical issues on your device, internet
            problems, or physical discomfort caused by practice technique.
            Please play responsibly and take breaks when needed.
          </p>

          <h2 className="text-2xl font-semibold">7. Contact</h2>
          <p>
            For questions about these Terms, email:<br />
            <strong>guitarlessonsin@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  )
}
