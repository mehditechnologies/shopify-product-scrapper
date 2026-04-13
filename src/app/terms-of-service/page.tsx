"use client";

import { useTheme } from "@/components/ThemeProvider";
import Link from "next/link";

export default function TermsOfService() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-linear-to-br from-gray-50 via-white to-gray-100"}`}>
      <div className="mx-auto px-4 py-20">
        <div className="text-center mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#018589]/10 dark:bg-[#018589]/20 border border-[#018589]/30 rounded-full text-[#018589] font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Legal
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Last updated: April 22, 2022
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`glass-card p-8 md:p-12 rounded-2xl`}>
            <div className="mb-8">
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                These terms and conditions (&quot;Agreement&quot;) set forth the general terms and conditions of your use of the <Link href="/" className="text-[#018589] hover:underline font-medium">shopify-scraper.com</Link> website (&quot;Website&quot; or &quot;Service&quot;) and any of its related products and services (collectively, &quot;Services&quot;). This Agreement is legally binding between you (&quot;User&quot;, &quot;you&quot; or &quot;your&quot;) and this Website operator (&quot;Operator&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Agreement.
              </p>
              <p className={`mt-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                If you do not agree with the terms of this Agreement, you must not accept this Agreement and may not access and use the Website and Services.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-r from-cyan-800 to-blue-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Accounts and Membership</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. We may, but have no obligation to, monitor and review new accounts before you may sign in and start using the Services.
              </p>
              <p className={`mt-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r to-pink-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Links to Other Resources</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                Although the Website and Services may link to other resources (such as websites, mobile applications, etc.), we are not, directly or indirectly, implying any approval, association, sponsorship, endorsement, or affiliation with any linked resource, unless specifically stated herein.
              </p>
              <p className={`mt-4 leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                We are not responsible for examining or evaluating, and we do not warrant the offerings of, any businesses or individuals or the content of their resources. We do not assume any responsibility or liability for the actions, products, services, and content of any other third parties.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r to-orange-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Changes and Amendments</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                We reserve the right to modify this Agreement or its terms relating to the Website and Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will send you an email to notify you. Continued use of the Website and Services after any such changes shall constitute your consent to such changes.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r  to-emerald-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Acceptance of These Terms</h2>
              </div>
              <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                You acknowledge that you have read this Agreement and agree to all its terms and conditions. By accessing and using the Website and Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to access or use the Website and Services.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r  to-cyan-700 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Contacting Us</h2>
              </div>
              <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                If you would like to contact us to understand more about this Agreement or wish to contact us concerning any matter relating to it, you may send an email to{" "}
                <Link href="mailto:shopify.scraper.com@gmail.com" className="text-[#018589] font-semibold hover:underline">abc@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}