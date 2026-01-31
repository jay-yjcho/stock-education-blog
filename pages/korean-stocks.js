import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function KoreanStocks() {
  return (
    <Layout title="국내 주식 투자">
      <Head>
        <title>국내 주식 투자 - 주식 용어 백과사전</title>
        <meta name="description" content="국내 주식 투자 기초, 대표 종목, 투자 전략 정리" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">국내 주식 투자</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 주식 시장 개요</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              한국 주식시장은 코스피(KOSPI)와 코스닥(KOSDAQ)으로 구성되어 있으며, 세계적으로 중요한新兴 시장 중 하나입니다. 코스피는 대형 우량주 중심, 코스닥은 중소형 성장주 중심으로 구성되어 있습니다.
            </p>
          </div>
          
          <AdComponent slot="7894561255" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">시장 구조 및 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">코스피(KOSPI)</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>대형주 중심의 시장</li>
                  <li>SK하이닉스, 삼성전자 등 포함</li>
                  <li>기관 투자자 비중 높음</li>
                  <li>안정성 중심의 투자 대상</li>
                  <li>거래량이 많고 유동성 우수</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">코스닥(KOSDAQ)</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>중소형 성장주 중심</li>
                  <li>바이오, IT 등 성장산업 집중</li>
                  <li>변동성 상대적으로 높음</li>
                  <li>성장 가능성에 베팅하는 투자</li>
                  <li>개미(개인) 투자자 비중 높음</li>
                </ul>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561256" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 대표 종목 TOP 5</h2>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">삼성전자 (005930):</span> 반도체 대표주로 코스피 시가총액 1위. 글로벌 반도체 시장에서 리더십을 가지고 있으며, 배당주와 성장주 양면을 갖춘 종목.</li>
              <li><span className="font-semibold">SK하이닉스 (000660):</span> D램 시장 점유율 1, 2위를 다투는 반도체 대표주. 주가 변동성이 크며 수익률이 높은 대신 리스크도 큰 성장주.</li>
              <li><span className="font-semibold">삼성바이오로직스 (207940):</span> 바이오 대표주로 바이오 CMO(Contract Manufacturing Organization) 업체. 바이오 산업의 성장성에 따라 주가 변동성이 큰 종목.</li>
              <li><span className="font-semibold">셀트리온 (068270):</span> 바이오의약품 개발 기업. 바이오시밀러 분야에서 글로벌 경쟁력을 갖춤. 임상 결과에 따라 주가 변동성이 큼.</li>
              <li><span className="font-semibold">현대차 (005380):</span> 자동차 대표주로 글로벌 자동차 시장에서 경쟁력을 갖춤. 전기차 전환에 대한 기대와 우려가 공존하는 종목.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561257" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 주식 투자 전략</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">기초 분석</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  재무제표 분석, PER/PBR, ROE, 부채비율 등 기업의 실적과 재무 상태를 분석하는 전통적인 방법.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">기술 분석</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  주가 차트, 거래량, 이동평균선, RSI, MACD 등을 분석하여 주가 흐름과 전환점을 예측하는 방법.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">정책 분석</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  정부 정책, 금리 변화, 산업 육성 정책 등을 분석하여 특정 산업이나 종목에 대한 영향을 예측하는 방법.
                </p>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561258" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">투자 시 유의사항</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">리스크 관리:</span> 손절매 기준을 정하고 이를 철저히 지키는 것이 중요</li>
              <li><span className="font-semibold">분산 투자:</span> 한 종목에 과도하게 투자하지 말고 업종/섹터를 분산</li>
              <li><span className="font-semibold">감정 배제:</span> FOMO(Fear of Missing Out)나 탐욕에 휘둘리지 말 것</li>
              <li><span className="font-semibold">장기 관점:</span> 단기 변동에 흔들리지 않고 장기 투자 전략 유지</li>
              <li><span className="font-semibold">지속 학습:</span> 시장 변화에 따라 투자 지식을 지속적으로 업데이트</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/etfs">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전: ETF
              </a>
            </Link>
            <Link href="/analysis-methods">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음: 분석 방법 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}