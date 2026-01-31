import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout({ children, title = '주식 용어 백과사전' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{title} - 주식 용어 백과사전</title>
        <meta name="description" content="주식 용어 및 금융 상품에 대한 이해를 돕는 교육 블로그" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <a className="text-xl font-bold text-blue-600 dark:text-blue-400 truncate">주식 용어 백과사전</a>
            </Link>
            <nav className="hidden md:flex space-x-2 lg:space-x-3 overflow-x-auto">
              <Link href="/"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">홈</a></Link>
              <Link href="/basic-terms"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">기초 용어</a></Link>
              <Link href="/derivatives"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">파생상품</a></Link>
              <Link href="/etfs"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">ETF</a></Link>
              <Link href="/korean-stocks"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">국내주식</a></Link>
              <Link href="/analysis-methods"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">분석방법</a></Link>
              <Link href="/covered-call"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">커버드콜</a></Link>
              <Link href="/straddle"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">스트래들</a></Link>
              <Link href="/strangle"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">스트렝글</a></Link>
              <Link href="/iron-condor"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">아이언콘도</a></Link>
              <Link href="/protective-put"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap text-xs sm:text-sm">프로텍티브풋</a></Link>
            </nav>
            <div className="md:hidden">
              <button 
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col space-y-3">
                <Link href="/"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">홈</a></Link>
                <Link href="/basic-terms"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">기초 용어</a></Link>
                <Link href="/derivatives"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">파생상품</a></Link>
                <Link href="/etfs"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">ETF</a></Link>
                <Link href="/korean-stocks"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">국내주식</a></Link>
                <Link href="/analysis-methods"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">분석방법</a></Link>
                <Link href="/covered-call"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">커버드콜</a></Link>
                <Link href="/straddle"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">스트래들</a></Link>
                <Link href="/strangle"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">스트렝글</a></Link>
                <Link href="/iron-condor"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">아이언콘도</a></Link>
                <Link href="/protective-put"><a className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm sm:text-base">프로텍티브풋</a></Link>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white dark:bg-gray-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">© 2026 주식 용어 백과사전. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}