import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function ETFs() {
  return (
    <Layout title="ETF (상장지수펀드)">
      <Head>
        <title>ETF (상장지수펀드) - 주식 용어 백과사전</title>
        <meta name="description" content="ETF란 무엇인가? ETF의 종류와 국내 대표 ETF 정리" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">ETF (상장지수펀드)</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              ETF(Exchange Traded Fund)는 증권거래소에 상장되어 주식처럼 거래되는 펀드입니다. 특정 지수, 원자재, 채권 등을 추적하는 투자신탁으로, 투자자들은 주식처럼 언제든지 ETF를 사고팔 수 있습니다. 장점으로는 운용보수 낮음, 유동성 높음, 투명성 우수 등이 있습니다.
            </p>
          </div>
          
          <AdComponent slot="7894561251" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">ETF의 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">장점</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>운용보수가 낮아 수익률에 긍정적</li>
                  <li>주식처럼 장중 거래 가능</li>
                  <li>분산투자로 위험 관리 가능</li>
                  <li>투명성 높음 (보유종목 공개)</li>
                  <li>매매 시 수수료 저렴</li>
                </ul>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">단점</h3>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm space-y-1">
                  <li>레버리지 ETF는 장기 보유에 부적합</li>
                  <li>가격과 순자산가치(NAV) 간 괴리 발생 가능</li>
                  <li>과거 수익률이 미래 수익률을 보장하지 않음</li>
                  <li>거래량이 적은 ETF는 유동성 리스크 존재</li>
                </ul>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561252" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">ETF 종류</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">지수형 ETF</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  코스피200, S&P500 등 특정 주가지수를 추적하는 ETF. 대표적인 수동형 투자 방식.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">테마형 ETF</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  특정 산업(예: 바이오, 5G), 기술(예: 인공지능) 등 특정 테마에 투자하는 ETF.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">채권형 ETF</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  정부채권, 회사채 등 채권에 투자하는 ETF. 주식 ETF보다 변동성이 작음.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">원자재 ETF</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3">
                  금, 석유, 농산물 등 원자재에 투자하는 ETF.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">레버리지/인버스 ETF</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  지수의 2배 또는 반대 방향으로 움직이는 ETF. 단기 거래용으로 적합하며 장기 보유에는 부적합.
                </p>
              </div>
            </div>
          </div>
          
          <AdComponent slot="7894561253" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 대표 ETF TOP 5</h2>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">KODEX 200 (091160):</span> 코스피200지수를 추적하는 국내 대표 ETF. 거래량이 가장 많고 유동성이 뛰어남.</li>
              <li><span className="font-semibold">TIGER 200 (102110):</span> 코스피200지수를 추적하는 ETF. KODEX 200과 함께 국내 ETF 시장을 대표함.</li>
              <li><span className="font-semibold">KODEX 코스닥150 (295000):</span> 코스닥 대형주를 추적하는 ETF. 성장주에 투자하고자 하는 투자자들에게 인기.</li>
              <li><span className="font-semibold">TIGER 미국S&P500 (122630):</span> 미국 S&P500 지수를 추적하는 해외주식 ETF. 글로벌 분산투자에 활용.</li>
              <li><span className="font-semibold">KODEX 골드선물 (132030):</span> 금선물을 추적하는 원자재 ETF. 방어적 포트폴리오 구성에 사용.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561254" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">ETF 투자 전략</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">롱텀 투자:</span> 시장 수익률을 추적하는 지수형 ETF를 장기 보유</li>
              <li><span className="font-semibold">분산 투자:</span> 다양한 자산군(주식, 채권, 원자재) ETF로 포트폴리오 구성</li>
              <li><span className="font-semibold">테마 투자:</span> 특정 산업이나 기술 테마에 베팅하는 테마형 ETF</li>
              <li><span className="font-semibold">리밸런싱:</span> 정기적으로 포트폴리오 비중 조정을 통해 목표 자산배분 유지</li>
              <li><span className="font-semibold">비용 관리:</span> 운용보수 낮은 ETF 선택으로 비용 절감</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/derivatives">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전: 파생상품
              </a>
            </Link>
            <Link href="/korean-stocks">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음: 국내주식 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}