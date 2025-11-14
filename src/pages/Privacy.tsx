import { Helmet } from "react-helmet"

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | George Capon Guitar Lessons</title>
        <meta
          name="description"
          content="Learn how your information is handled when you contact or take guitar lessons with George Capon."
        />
        <link
          rel="canonical"
          href="https://georgecaponguitarlessons.com/privacy"
        />
      </Helmet>

      <main className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-muted-foreground mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-6 leading-relaxed text-lg">

          <p>
            This Privacy Policy explains how I, <strong>George Capon</strong>,
            handle your personal information when you contact me or take guitar lessons.
            I keep things simple and only collect the minimum information needed to
            provide lessons.
          </p>

          <h2 className="text-2xl font-semibold">1. Information I Collect</h2>
          <p>I only collect information you choose to provide, such as:</p>
          <ul className="list-disc ml-6">
            <li>Your name</li>
            <li>Your email address or WhatsApp number</li>
            <li>Any details you include in messages</li>
            <li>Simple lesson notes (e.g. “We learned the C chord today”)</li>
          </ul>
          <p>I do <strong>not</strong> use analytics, tracking cookies, or advertising tools.</p>

          <h2 className="text-2xl font-semibold">2. How Your Information Is Used</h2>
          <p>I only use your information to:</p>
          <ul className="list-disc ml-6">
            <li>Respond to enquiries</li>
            <li>Arrange and deliver lessons</li>
            <li>Keep basic lesson notes for continuity</li>
            <li>Send optional follow-up materials, such as short WhatsApp videos</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
          <p>
            I do <strong>not</strong> share your information with third parties.  
            The only services involved are email or WhatsApp, which are used solely for communication.
          </p>

          <h2 className="text-2xl font-semibold">4. Your Rights</h2>
          <p>You may request at any time:</p>
          <ul className="list-disc ml-6">
            <li>A copy of your information</li>
            <li>Corrections to your information</li>
            <li>Deletion of your information</li>
          </ul>
          <p>Email me at <strong>guitarlessonsin@gmail.com</strong> to make a request.</p>

          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <p>
            Lesson notes are kept only while you are an active student.  
            You may request deletion at any time.
          </p>

          <h2 className="text-2xl font-semibold">6. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, contact me at:
            <br />
            <strong>guitarlessonsin@gmail.com</strong>
          </p>
        </div>
      </main>
    </>
  )
}
