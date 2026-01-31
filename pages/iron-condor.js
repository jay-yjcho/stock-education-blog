import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function IronCondor() {
  return (
    <Layout title="아이언콘도 (Iron Condor) 전략">
      <Head>
        <title>아이언콘도 (Iron Condor) 전략 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 아이언콘도 전략에 대한 상세 설명과 국내 종목 예시" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">아이언콘도 (Iron Condor) 전략</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아이언콘도(Iron Condor)는 콜 스프레드와 풋 스프레드를 동시에 구성하는 중립적인 옵션 전략입니다. 이 전략은 주가가 일정 범위 내에서 움직일 것으로 예상될 때 사용되며, 수익과 손실이 모두 제한된 구조입니다. 높은 승률을 기록할 수 있지만 수익률은 제한적입니다.
            </p>
          </div>
          
          <AdComponent slot="7894561239" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">특징</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">중립적 전망:</span> 주가가 일정 범위 내에서 움직일 것으로 예상</li>
              <li><span className="font-semibold">수익 제한:</span> 최대 수익은 초기 프리미엄 수취액으로 제한</li>
              <li><span className="font-semibold">손실 제한:</span> 최대 손실도 사전에 계산 가능</li>
              <li><span className="font-semibold">시간가치 우호:</span> 시간이 지남에 따라 옵션 가치 감소로 수익에 유리</li>
              <li><span className="font-semibold">IV 하락 우호:</span> 내재변동성 하락 시 수익에 유리</li>
            </ul>
          </div>
          
          <AdComponent slot="7894561240" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 유명 종목 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 아이언콘도 전략에 자주 활용되는 국내 비교적 안정적인 종목들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">삼성전자 (005930):</span> 코스피 대표주로 옵션 거래량이 많고 변동성이 상대적으로 안정적인 종목.</li>
              <li><span className="font-semibold">SK하이닉스 (000660):</span> 반도체 대표주로 일정한 주기의 호재와 악재가 예상되는 종목.</li>
              <li><span className="font-semibold">현대차 (005380):</span> 자동차 대표주로 실적 발표 전후 등 일정한 이벤트가 예상되는 종목.</li>
              <li><span className="font-semibold">기아 (000270):</span> 자동차 업종으로 실적 발표 시즌 등 주기적인 변동이 예상되는 종목.</li>
              <li><span className="font-semibold">한국전력 (015760):</span> 공공요금 정책 영향을 받지만 상대적으로 안정적인 흐름을 보이는 종목.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561241" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">전략 구사 방법</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              1. <span className="font-semibold">숏 콜 스트레인지:</span> ATM 또는 OTM 콜 옵션 매도 + 더 높은 행사가격 콜 옵션 매수
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              2. <span className="font-semibold">숏 풋 스트레인지:</span> ATM 또는 OTM 풋 옵션 매도 + 더 낮은 행사가격 풋 옵션 매수
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              3. <span className="font-semibold">정의:</span> 총 4개의 옵션을 동시에 구성 (2개 매도, 2개 매수)
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              4. <span className="font-semibold">수익:</span> 만기일에 주가가 두 스트레인지 사이에 위치할 경우 최대 수익
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              5. <span className="font-semibold">손실:</span> 주가가 두 스트레인지 범위를 벗어날 경우 손실 발생
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/strangle">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전 전략: 스트렝글
              </a>
            </Link>
            <Link href="/protective-put">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음 전략: 프로텍티브풋 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}