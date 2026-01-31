import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function BasicTerms() {
  return (
    <Layout title="기초 주식 용어">
      <Head>
        <title>기초 주식 용어 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 투자를 위한 기초 용어 설명" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">기초 주식 용어</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">주식 기본 개념</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              주식 투자에 앞서 알아야 할 기본 용어들을 설명합니다. 주식 시장에서 성공적인 투자를 하기 위해서는 이러한 기본 개념을 이해하는 것이 중요합니다.
            </p>
          </div>
          
          <AdComponent slot="7894561245" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">기본 용어 정리</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">PER (Price Earnings Ratio)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  주가수익비는 주가를 주당순이익(EPS)으로 나눈 값으로, 주식의 가치 평가에 사용됩니다. PER이 낮을수록 저평가된 것으로 간주됩니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">PBR (Price Book-value Ratio)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  주가순자산비율은 주가를 주당순자산으로 나눈 값으로, 기업의 자산 대비 주가를 평가합니다. PBR이 1배 미만이면 자산 대비 저평가 상태입니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">EPS (Earnings Per Share)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  주당순이익은 기업의 순이익을 발행주식수로 나눈 값으로, 주식의 수익성을 나타냅니다. EPS가 높을수록 수익성이 좋다고 판단됩니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">ROE (Return on Equity)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  자기자본이익률은 당기순이익을 자기자본으로 나눈 값으로, 주주의 자본으로 얼마만큼의 수익을 창출했는지를 나타냅니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">배당수익률</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  주식의 1주당 배당금을 주가로 나눈 비율로, 배당 수익을 나타냅니다. 고배당주를 찾는 투자자에게 중요한 지표입니다.
                </p>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561246" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">차트 분석 용어</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">지지선 / 저항선</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  지지선은 주가가 하락하다가 반등하는 가상의 수평선이며, 저항선은 주가가 상승하다가 하락하는 가상의 수평선입니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">이동평균선</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  일정 기간 동안의 주가 평균을 연결한 선으로, 주가의 추세를 파악하는 데 사용됩니다. 대표적으로 5일, 20일, 60일, 120일 이동평균선이 있습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">볼린저밴드</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  이동평균선을 중심으로 표준편차 범위를 표시한 차트 도구로, 주가의 과매수/과매도 상태를 판단하는 데 사용됩니다.
                </p>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561247" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 홈으로
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