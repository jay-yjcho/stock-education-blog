import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function ProtectivePut() {
  return (
    <Layout title="프로텍티브풋 (Protective Put) 전략">
      <Head>
        <title>프로텍티브풋 (Protective Put) 전략 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 프로텍티브풋 전략에 대한 상세 설명과 국내 종목 예시" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">프로텍티브풋 (Protective Put) 전략</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              프로텍티브풋(Protective Put)은 보유한 주식에 대해 풋 옵션을 매수하여 하락 위험을 보호하는 전략입니다. 이 전략은 주식 보유자는 그대로 유지하면서 하락장에 대한 헤지 수단을 마련할 수 있어, 자산 보호와 동시에 상승 가능성도 유지할 수 있는 전략입니다.
            </p>
          </div>
          
          <AdComponent slot="7894561242" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">특징</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">하락 보호:</span> 주가 하락 시 풋 옵션으로 손실 방어</li>
              <li><span className="font-semibold">상승 가능성 유지:</span> 주가 상승 시 무제한 수익 가능</li>
              <li><span className="font-semibold">비용 발생:</span> 풋 옵션 프리미엄 지불로 비용 발생</li>
              <li><span className="font-semibold">보험 개념:</span> 주식 포지션에 대한 보험 역할</li>
              <li><span className="font-semibold">심리적 안정:</span> 하락 위험에 대한 심리적 부담 완화</li>
            </ul>
          </div>
          
          <AdComponent slot="7894561243" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 HTS 라인업 상품 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 프로텍티브풋 전략에 자주 활용되는 국내 대표 ETF 상품들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">KODEX 200 (091160):</span> 코스피200을 추적하는 대표 ETF로 시장 리스크 헤지를 위해 프로텍티브풋 전략이 유용.</li>
              <li><span className="font-semibold">TIGER 레버리지 (114800):</span> 레버리지 ETF로 변동성이 크기 때문에 하락 방어 전략이 필요하여 프로텍티브풋 전략에 적합.</li>
              <li><span className="font-semibold">KODEX 반도체 (069500):</span> 섹터 ETF로 산업 리스크에 노출되어 있어 헤지 수요가 높은 상품.</li>
              <li><span className="font-semibold">TIGER 차이나CSI300 (150840):</span> 중국시장 ETF로 정책 리스크가 존재해 하락 방어 전략이 유용한 상품.</li>
              <li><span className="font-semibold">ACE 미국S&P500 (251590):</span> 글로벌 시장 ETF로 외부 충격에 대한 보호 전략이 필요한 상품.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561244" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">전략 구사 방법</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              1. <span className="font-semibold">주식 보유:</span> 이미 보유한 주식 또는 신규 매수한 주식
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              2. <span className="font-semibold">풋 옵션 매수:</span> 보유 주식 수량에 맞는 풋 옵션 매수
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              3. <span className="font-semibold">행사가격 선택:</span> ATM 또는 OTM 풋 옵션 선택 (가격에 따라 보호 수준 달라짐)
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              4. <span className="font-semibold">결과 - 하락:</span> 주가 하락 시 풋 옵션 수익으로 주식 손실 보완
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              5. <span className="font-semibold">결과 - 상승:</span> 주가 상승 시 풋 옵션 손실은 제한적이며 주식 수익 실현
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/iron-condor">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전 전략: 아이언콘도
              </a>
            </Link>
            <Link href="/derivatives">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음: 파생상품 기초 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}