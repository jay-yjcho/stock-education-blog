import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 HTS 라인업 상품 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 커버드콜 전략에 자주 활용되는 국내 대표 ETF 상품들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">KODEX 200 (091160):</span> 코스피200을 추적하는 대표 ETF로 거래량이 많고 옵션 거래도 활발함. 배당수익 + 옵션 프리미엄 수익 추구 가능.</li>
              <li><span className="font-semibold">TIGER 200 (102110):</span> NH-Amundi의 코스피200 ETF로 유동성이 풍부해 커버드콜 전략에 최적화됨.</li>
              <li><span className="font-semibold">KODEX 코스닥150 (295000):</span> 코스닥 대형주를 추적하는 ETF로 성장주 포트폴리오에 적합한 커버드콜 전략 대상.</li>
              <li><span className="font-semibold">TIGER 미국S&P500 (122630):</span> 미국 주식시장 노출을 위한 ETF로 글로벌 포트폴리오에 활용 가능.</li>
              <li><span className="font-semibold">ACE KRX자동차 (347500):</span> 자동차 섹터 ETF로 산업별 테마 포트폴리오에 활용 가능한 커버드콜 전략 대상.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561232" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">프리미엄과 배당 구조</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              커버드콜 전략의 수익 구조는 다음과 같은 요소들로 구성됩니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">옵션 프리미엄</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  콜 옵션을 매도함으로써 수취하는 수익. 내재가치와 시간가치로 구성됨.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">주식 배당</h3>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  보유 주식으로부터 발생하는 배당수익. 옵션 보유자는 배당권리가 없음.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">주가차익</h3>
                <p className="text-purple-700 dark:text-purple-300 text-sm">
                  행사가격 이하에서는 주가차익 + 프리미엄, 이상에서는 프리미엄만 확정.
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-4 text-sm sm:text-base">
              <span className="font-semibold">프리미엄의 구성:</span> 프리미엄은 내재가치(현재 주가 - 행사가격)와 시간가치(만기까지 남은 시간에 따른 가치)로 구성됩니다. 
              변동성에 따라 프리미엄이 달라지며, 옵션 거래가 활발할수록 높은 프리미엄을 받을 수 있습니다.
            </p>
          </div>
          
          <AdComponent slot="7894561233" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">세금 구조 및 과세 시점</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">옵션 프리미엄</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  <span className="font-semibold">과세 여부:</span> 일반적으로 양도차익으로 분류되어 과세 대상
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-semibold">과세 시점:</span> 옵션 청산 또는 만기 시점 (실제 수익 실현 시점)
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">배당소득</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  <span className="font-semibold">과세 여부:</span> 별도의 배당소득세 (14%, 일부 면세 가능)
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-semibold">과세 시점:</span> 배당금 수령 시점
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 sm:mt-4 text-sm sm:text-base">
              <span className="font-semibold">세금 절감 전략:</span> 커버드콜 전략은 주가 상승으로 인한 양도차익을 제한함으로써, 
              높은 이익이 발생한 주식의 세금 부담을 줄일 수 있습니다. 옵션 프리미엄은 과세 시점을 조절할 수 있어 
              연도별 수익 분산을 통한 세금 절감이 가능합니다.
            </p>
          </div>
          
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
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">커버드콜 전략 다이어그램</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              아래 다이어그램은 커버드콜 전략의 구조와 손익 구조를 시각적으로 설명합니다:
            </p>
            <div className="my-4 flex justify-center">
              <Image
                src="/images/covered-call-diagram.jpg"
                alt="Covered Call 전략 다이어그램 - 주식 보유 + 콜 옵션 매도 구조"
                width={800}
                height={600}
                className="rounded-lg shadow-md max-w-full h-auto"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">전략 구조</h3>
                <ul className="list-disc pl-5 text-green-700 dark:text-green-300 text-sm">
                  <li>주식 보유 + 콜 옵션 매도</li>
                  <li>옵션 프리미엄 수익 확보</li>
                  <li>하락 위험 완화</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">적합한 시장</h3>
                <ul className="list-disc pl-5 text-blue-700 dark:text-blue-300 text-sm">
                  <li>보합장</li>
                  <li>약세장</li>
                  <li>변동성 낮은 시장</li>
                </ul>
              </div>
            </div>
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