import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function CoveredCall() {
  return (
    <Layout title="커버드콜 (Covered Call) 전략">
      <Head>
        <title>커버드콜 (Covered Call) 전략 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 커버드콜 전략에 대한 상세 설명과 국내 종목 예시" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">커버드콜 (Covered Call) 전략</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              커버드콜(Covered Call)은 주식 투자자들이 보유한 주식에 대해 콜 옵션을 매도함으로써 프리미엄 수입을 얻는 전략입니다. 이 전략은 주가가 일정 범위 내에서 움직일 것으로 예상될 때 사용되며, 수익률을 높이거나 하락 위험을 완화하는 데 효과적입니다.
            </p>
          </div>
          
          <AdComponent slot="7894561230" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">특징</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">수익 구조:</span> 보유 주식으로부터 배당수익 + 옵션 프리미엄 수익</li>
              <li><span className="font-semibold">리스크:</span> 주가 하락 시 손실은 있지만 옵션 프리미엄으로 완충</li>
              <li><span className="font-semibold">수익 한도:</span> 주가가 행사가격 이상으로 올라도 수익은 제한됨</li>
              <li><span className="font-semibold">시장 전망:</span> 보합 또는 약세장에 적합</li>
              <li><span className="font-semibold">수익률 향상:</span> 보유 주식의 연간 수익률을 옵션 프리미엄으로 향상</li>
            </ul>
          </div>
          
          <AdComponent slot="7894561231" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 유명 종목 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 커버드콜 전략에 자주 활용되는 국내 고배당주 및 거래량이 많은 종목들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">SK하이닉스 (000660):</span> 반도체 대표주로 주가 변동성이 크고 옵션 거래량이 활발함. 배당성향은 낮지만 주가차익을 노릴 수 있음.</li>
              <li><span className="font-semibold">삼성전자 (005930):</span> 코스피 대표주로 유동성과 옵션 거래량이 가장 많아 커버드콜 전략에 최적화됨.</li>
              <li><span className="font-semibold">현대차 (005380):</span> 자동차 대표주로 주기적인 수익성 개선과 배당 수혜가 가능한 종목.</li>
              <li><span className="font-semibold">LG화학 (051910):</span> 2차전지 산업의 성장성이 기대되는 종목으로 옵션 전략에 적합함.</li>
              <li><span className="font-semibold">한국전력 (015760):</span> 고배당주로 배당수익률과 옵션 프리미엄 수익을 동시에 노릴 수 있음.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561232" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">전략 구사 방법</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              1. <span className="font-semibold">주식 보유:</span> 거래량이 많고 변동성이 있는 주식을 보유
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              2. <span className="font-semibold">콜 옵션 매도:</span> 현재 주가보다 약간 높은 행사가격의 콜 옵션을 매도
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              3. <span className="font-semibold">프리미엄 수취:</span> 옵션 프리미엄을 수취하여 수익 확보
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              4. <span className="font-semibold">결과:</span> 주가가 행사가 미만이면 옵션은 무효, 프리미엄 + 주가 보유 수익
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              5. <span className="font-semibold">결과:</span> 주가가 행사가 이상이면 주식 매도, 제한된 수익 실현
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 홈으로
              </a>
            </Link>
            <Link href="/straddle">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음 전략: 스트래들 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}