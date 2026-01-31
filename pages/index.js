import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="주식 용어 백과사전">
      <Head>
        <title>주식 용어 백과사전 - 주식 용어 및 금융 상품에 대한 이해를 돕는 교육 블로그</title>
        <meta name="description" content="주식 용어 및 금융 상품에 대한 이해를 돕는 교육 블로그" />
      </Head>

      <div className="hero-pattern min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
              주식 용어 <span className="text-blue-600">백과사전</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto mb-6 sm:mb-10">
              주식 용어 및 금융 상품에 대한 이해를 돕는 교육 블로그
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/basic-terms">
                <a className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
                  기초 용어 배우기
                </a>
              </Link>
              <Link href="/covered-call">
                <a className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600">
                  인기 전략 배우기
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Topics Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 sm:mb-12">주요 주식 용어 및 전략</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/covered-call">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">커버드콜 (Covered Call)</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">주식 보유 후 콜옵션 매도 전략으로 수익 확보</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">자세히 보기 →</span>
              </a>
            </Link>

            <Link href="/straddle">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">스트래들 (Straddle)</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">대량 변동장 대비 전략 - 콜&풋 옵션 동시 매수</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">자세히 보기 →</span>
              </a>
            </Link>

            <Link href="/strangle">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">스트렝글 (Strangle)</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">스트래들 변형 전략 - 저렴한 프리미엄 전략</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">자세히 보기 →</span>
              </a>
            </Link>

            <Link href="/iron-condor">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">아이언콘도 (Iron Condor)</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">횡보장에 적합한 수익 전략</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">자세히 보기 →</span>
              </a>
            </Link>

            <Link href="/protective-put">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">프로텍티브풋 (Protective Put)</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">하락장 대비 포지션 보호 전략</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">자세히 보기 →</span>
              </a>
            </Link>

            <Link href="/derivatives">
              <a className="card h-full flex flex-col p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">기초 파생상품</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow text-sm sm:text-base">옵션, 선물 등 파생상품 기초 개념</p>
                <span className="mt-3 sm:mt-4 text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">자세히 보기 →</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}