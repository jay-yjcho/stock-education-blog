import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function Derivatives() {
  return (
    <Layout title="기초 파생상품">
      <Head>
        <title>기초 파생상품 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 파생상품 기초 개념 및 종류 설명" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">기초 파생상품</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              파생상품(Derivatives)은 기초자산(주식, 채권, 상품 등)의 가격 변동을 기초로 하는 금융상품입니다. 미래의 가격을 미리 결정하거나 위험을 헷지(hedge)하기 위해 사용되며, 옵션, 선물, 스왑 등 다양한 형태가 있습니다.
            </p>
          </div>
          
          <AdComponent slot="7894561248" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">주요 파생상품 종류</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">옵션(Option)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">정의:</span> 일정 가격(행사가격)에 기초자산을 살 권리(콜 옵션) 또는 팔 권리(풋 옵션)를 가진 계약
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">특징:</span> 권리이지 의무는 아니므로 손실이 프리미엄으로 제한됨
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  <span className="font-semibold">거래 예시:</span> KOSPI200 옵션, 개별주식 옵션
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">선물(Futures)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">정의:</span> 일정 기간 후에 일정 가격에 기초자산을 사거나 팔 obligation(의무)를 가진 계약
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">특징:</span> 권리가 아닌 의무이므로 손익이 무제한적일 수 있음
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  <span className="font-semibold">거래 예시:</span> KOSPI200 선물, 코스닥150 선물
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">ELS (Equity Linked Securities)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">정의:</span> 주식 또는 주가지수에 연계된 구조화된 금융상품
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">특징:</span> 원금 보존 또는 비보존형, 높은 수익률 기대 가능
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  <span className="font-semibold">거래 예시:</span> KOSPI200 연계 ELS, 개별주식 연계 ELS
                </p>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561249" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">옵션의 기본 개념</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">콜 옵션 vs 풋 옵션</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">콜 옵션(Call Option):</span> 기초자산을 '살' 권리. 주가 상승 시 수익
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  <span className="font-semibold">풋 옵션(Put Option):</span> 기초자산을 '팔' 권리. 주가 하락 시 수익
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">행사가격과 만기일</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">행사가격(Strike Price):</span> 옵션이 행사될 때 거래되는 가격
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  <span className="font-semibold">만기일(Expiration Date):</span> 옵션 계약이 만료되는 날짜
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  <span className="font-semibold">ATM/ITM/OTM:</span> ATM(At The Money)는 현재가와 행사가가 비슷한 옵션, ITM(In The Money)는 수익이 있는 옵션, OTM(Out Of The Money)는 수익이 없는 옵션
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">옵션 프리미엄</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  옵션 계약을 체결할 때 지불해야 하는 가격. 내재가치와 시간가치로 구성됨. 옵션 매도자는 프리미엄을 수취하고 매수자는 프리미엄을 지불함.
                </p>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561250" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">파생상품의 용도</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">투기(Speculation):</span> 레버리지 효과를 활용한 수익 추구</li>
              <li><span className="font-semibold">헤지(Hedging):</span> 기존 포지션의 위험을 줄이기 위한 방어적 운용</li>
              <li><span className="font-semibold">차익거래(Arbitrage):</span> 시장 간 가격차를 노리는 무위험 수익 추구</li>
              <li><span className="font-semibold">수익증대:</span> 프리미엄 수취를 통한 수익 증대 (예: 커버드콜)</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/protective-put">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전: 프로텍티브풋
              </a>
            </Link>
            <Link href="/etfs">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음: ETF →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}