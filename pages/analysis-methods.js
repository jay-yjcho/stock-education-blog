import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function AnalysisMethods() {
  return (
    <Layout title="주식 분석 방법">
      <Head>
        <title>주식 분석 방법 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 분석 방법: 기초분석, 기술분석, 심리분석 등 정리" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">주식 분석 방법</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">분석 방법 개요</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              주식 투자의 성공을 위해서는 다양한 분석 방법을 익히고 자신에게 맞는 방법을 선택하는 것이 중요합니다. 각 분석 방법은 장단점이 있으며, 대부분의 전문 투자자들은 복합적으로 사용합니다.
            </p>
          </div>
          
          <AdComponent slot="7894561259" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">기초분석 (Fundamental Analysis)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">정의:</span> 기업의 본질적 가치를 분석하여 주식의 내재가치를 산정하고, 현재 주가가 고평가인지 저평가인지 판단하는 방법입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">주요 지표</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>PER (주가수익비율)</li>
                  <li>PBR (주가순자산비율)</li>
                  <li>ROE (자기자본이익률)</li>
                  <li>EPS (주당순이익)</li>
                  <li>부채비율</li>
                  <li>영업이익률</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">장단점</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  <span className="font-semibold">장점:</span> 장기적인 관점에서 투자 가능
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-semibold">단점:</span> 단기 가격 변화 예측 어려움
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <span className="font-semibold">적용 대상:</span> 가치투자자, 장기투자자에게 적합합니다. Warren Buffett이 대표적인 기초분석 투자자입니다.
            </p>
          </div>
          
          <AdComponent slot="7894561260" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">기술분석 (Technical Analysis)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">정의:</span> 주가 차트와 거래량 등의 시장 데이터를 분석하여 가격 움직임의 패턴을 파악하고 미래 가격 움직임을 예측하는 방법입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">주요 도구</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>이동평균선</li>
                  <li>볼린저밴드</li>
                  <li>RSI (Relative Strength Index)</li>
                  <li>MACD (Moving Average Convergence Divergence)</li>
                  <li>캔들차트</li>
                  <li>지지/저항선</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">장단점</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  <span className="font-semibold">장점:</span> 단기 매매 타이밍 파악에 유리
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-semibold">단점:</span> 기업 본질적 가치 반영 부족
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <span className="font-semibold">적용 대상:</span> 단기/중기 투자자, 매매 중심 투자자에게 적합합니다.
            </p>
          </div>
          
          <AdComponent slot="7894561261" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">심리분석 (Sentiment Analysis)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              <span className="font-semibold">정의:</span> 투자자들의 심리와 감정, 시장 분위기를 분석하여 주가 흐름을 예측하는 방법입니다. 인간의 심리적 요인은 시장에 큰 영향을 미칩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">주요 요소</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>시장의 낙관/비관 지수</li>
                  <li>공매도 비율</li>
                  <li>PUT/CALL 비율</li>
                  <li>언론 보도 경향</li>
                  <li>소셜 미디어 감성 분석</li>
                  <li>기관/개인 투자자 매매 동향</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">장단점</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  <span className="font-semibold">장점:</span> 시장 전환점 포착에 효과적
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  <span className="font-semibold">단점:</span> 정량화 어려움, 주관적 해석 가능성
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <span className="font-semibold">적용 대상:</span> 시장 타이밍을 중요시하는 투자자에게 적합합니다.
            </p>
          </div>
          
          <AdComponent slot="7894561262" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">복합 분석 전략</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              대부분의 전문 투자자들은 단일 분석 방법이 아닌 여러 분석 방법을 결합하여 사용합니다:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">장기 투자자의 경우</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  기초분석으로 주식의 내재가치를 파악하고, 기술분석으로 매수/매도 타이밍을 조정합니다. 심리분석을 통해 시장 전환점을 감지합니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">단기 투자자의 경우</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  기술분석을 주로 사용하고, 기초분석으로 대략적인 주식 품질을 판단하며, 심리분석으로 시장 분위기를 파악합니다.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/korean-stocks">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전: 국내주식
              </a>
            </Link>
            <Link href="/">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                홈으로 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}