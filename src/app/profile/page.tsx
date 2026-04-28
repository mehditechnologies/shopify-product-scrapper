"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/ThemeProvider"
import { createClient } from "@/utils/supabase/client"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface HistoryItem {
  id: number
  url: string
  type: "scrape" | "theme" | "app"
  created_at: string
  result_count?: number
  theme_name?: string
  app_name?: string
}

export default function Profile() {
  const { theme } = useTheme()
  const router = useRouter()
  const [user, setUser] = useState<{ email?: string; user_metadata?: { full_name?: string } } | null>(null)
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"scrape" | "theme" | "app">("scrape")

  useEffect(() => {
    async function loadUserData() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push("/login")
        return
      }
      
      setUser(user)
      
      const { data: historyData } = await supabase
        .from('user_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      
      if (historyData) {
        setHistory(historyData)
      }
      
      setLoading(false)
    }
    
    loadUserData()
  }, [router])

  const getFilteredHistory = (type: string) => {
    return history.filter(item => item.type === type).slice(0, 10)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  const clearHistory = async (type: string) => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase
      .from('user_history')
      .delete()
      .eq('user_id', user.id)
      .eq('type', type)

    setHistory(history.filter(item => item.type !== type))
  }

  if (loading) {
    return (
      <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-white"} flex items-center justify-center`}>
        <div className="animate-spin w-8 h-8 border-2 border-[#01888C] border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#0F1729]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar - User Info */}
          <div className="lg:w-72">
            <div className={`rounded-2xl p-6 ${theme === "dark" ? "bg-[#162035]" : "bg-white shadow-md"}`}>
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center ${theme === "dark" ? "bg-[#0F1729]" : "bg-gray-100"}`}>
                  <span className="text-3xl font-bold text-[#01888C]">
                    {user?.user_metadata?.full_name?.[0] || user?.email?.[0] || "U"}
                  </span>
                </div>
                <h2 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {user?.user_metadata?.full_name || "User"}
                </h2>
                <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  {user?.email}
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-dashed">
                <div className="space-y-3">
                  <div className={`flex justify-between text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    <span>Total Scrapes</span>
                    <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                      {history.filter(h => h.type === "scrape").length}
                    </span>
                  </div>
                  <div className={`flex justify-between text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    <span>Theme Checks</span>
                    <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                      {history.filter(h => h.type === "theme").length}
                    </span>
                  </div>
                  <div className={`flex justify-between text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                    <span>App Checks</span>
                    <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                      {history.filter(h => h.type === "app").length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - History */}
          <div className="flex-1">
            <div className={`rounded-2xl ${theme === "dark" ? "bg-[#162035]" : "bg-white shadow-md"}`}>
              {/* Tabs */}
              <div className="flex border-b border-dashed">
                <button
                  onClick={() => setActiveTab("scrape")}
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "scrape"
                      ? "text-[#01888C] border-b-2 border-[#01888C]"
                      : theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Scraped Stores
                </button>
                <button
                  onClick={() => setActiveTab("theme")}
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "theme"
                      ? "text-[#01888C] border-b-2 border-[#01888C]"
                      : theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Theme History
                </button>
                <button
                  onClick={() => setActiveTab("app")}
                  className={`flex-1 py-4 text-center font-medium transition-colors ${
                    activeTab === "app"
                      ? "text-[#01888C] border-b-2 border-[#01888C]"
                      : theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  App History
                </button>
              </div>

              {/* History List */}
              <div className="p-6">
                {activeTab === "scrape" && (
                  <>
                    {getFilteredHistory("scrape").length === 0 ? (
                      <EmptyState type="scrape" />
                    ) : (
                      <HistoryList 
                        items={getFilteredHistory("scrape")} 
                        formatDate={formatDate}
                        theme={theme}
                        getLabel={(item) => `${item.result_count || 0} products`}
                      />
                    )}
                  </>
                )}

                {activeTab === "theme" && (
                  <>
                    {getFilteredHistory("theme").length === 0 ? (
                      <EmptyState type="theme" />
                    ) : (
                      <HistoryList 
                        items={getFilteredHistory("theme")} 
                        formatDate={formatDate}
                        theme={theme}
                        getLabel={(item) => item.theme_name || "Detected"}
                      />
                    )}
                  </>
                )}

                {activeTab === "app" && (
                  <>
                    {getFilteredHistory("app").length === 0 ? (
                      <EmptyState type="app" />
                    ) : (
                      <HistoryList 
                        items={getFilteredHistory("app")} 
                        formatDate={formatDate}
                        theme={theme}
                        getLabel={(item) => item.app_name || "Detected"}
                      />
                    )}
                  </>
                )}

                {history.length > 0 && (
                  <button
                    onClick={() => clearHistory(activeTab)}
                    className={`mt-4 text-sm ${theme === "dark" ? "text-gray-400 hover:text-red-400" : "text-gray-500 hover:text-red-600"}`}
                  >
                    Clear {activeTab} history
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


function EmptyState({ type }: { type: string }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <p className="text-gray-500 dark:text-gray-400">No {type} history yet</p>
      <Link 
        href={type === "scrape" ? "/scrape" : type === "theme" ? "/theme_detector" : "/app_detector"}
        className="mt-2 inline-block text-[#01888C] hover:underline text-sm"
      >
        Start {type === "scrape" ? "scraping" : "detecting"}
      </Link>
    </div>
  )
}

function HistoryList({ 
  items, 
  formatDate, 
  theme,
  getLabel
}: { 
  items: HistoryItem[], 
  formatDate: (d: string) => string,
  theme: string,
  getLabel: (item: HistoryItem) => string
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div 
          key={item.id}
          className={`flex items-center justify-between p-4 rounded-xl ${
            theme === "dark" ? "bg-[#0F1729]" : "bg-gray-50"
          }`}
        >
          <div className="flex-1 min-w-0">
            <p className={`font-medium truncate ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              {item.url}
            </p>
            <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              {formatDate(item.created_at)} · {getLabel(item)}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  )
}
}