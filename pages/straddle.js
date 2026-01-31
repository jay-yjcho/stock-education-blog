import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function Straddle() {
  return (
    <Layout title="스트래들 (Straddle) 전략">
      <Head>
        <title>스트래들 (Straddle) 전략 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 스트래들 전략에 대한 상세 설명과 국내 종목 예시" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">스트래들 (Straddle) 전략</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              스트래들(Straddle)은 동일한 행사가격과 만기일을 가진 콜 옵션과 풋 옵션을 동시에 매수하는 전략입니다. 이 전략은 주가의 급등 또는 급락을 예상할 때 사용되며, 방향성에 관계없이 큰 변동성을 이용해 수익을 추구합니다. 주요 발표 이전이나 불확실성이 클 때 자주 사용됩니다.
            </p>
          </div>
          
          <AdComponent slot="7894561233" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">특징</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">변동성 베팅:</span> 주가 방향이 아닌 변동성에 베팅하는 전략</li>
              <li><span className="font-semibold">무한 상승 수익:</span> 주가가 급등하면 수익이 무한대로 증가</li>
              <li><span className="font-semibold">하한 손실 제한:</span> 손실은 프리미엄 지불액으로 제한됨</li>
              <li><span className="font-semibold">비용 부담:</span> 콜과 풋 두 가지 옵션 프리미엄 모두 지불 필요</li>
              <li><span className="font-semibold">시간가치 감소:</span> 옵션 시간가치가 빠르게 감소함</li>
            </ul>
          </div>
          
          <AdComponent slot="7894561234" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 유명 종목 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 스트래들 전략에 자주 활용되는 국내 변동성이 큰 종목들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">셀트리온 (068270):</span> 바이오 업종으로 임상 결과 발표 등 이벤트에 따른 급등락이 잦아 스트래들 전략에 적합함.</li>
              <li><span className="font-semibold">카카오 (035720):</span> IT 대표주로 정기적인 실적 발표나 정책 변화에 민감한 반응을 보임.</li>
              <li><span className="font-semibold">포스코홀딩스 (005490):</span> 철강 업황 변화와 글로벌 경기 영향을 받아 변동성이 큰 종목.</li>
              <li><span className="font-semibold">현대모비스 (012330):</span> 자동차 부품 대표주로 산업 이슈에 따라 큰 변동성이 발생함.</li>
              <li><span className="font-semibold">LG에너지솔루션 (373220):</span> 2차전지 업종으로 정부 정책 및 글로벌 수주 소식에 민감한 반응.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561235" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">전략 구사 방법</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              1. <span className="font-semibold">옵션 선택:</span> 동일한 종목, 행사가격, 만기일의 콜과 풋 옵션 선택
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              2. <span className="font-semibold">동시 매수:</span> 콜 옵션과 풋 옵션을 동시에 매수
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              3. <span className="font-semibold">이벤트 대기:</span> 주가가 급등 또는 급락할 이벤트 기다림
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              4. <span className="font-semibold">결과:</span> 주가 급등 시 콜 옵션 수익, 급락 시 풋 옵션 수익 실현
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              5. <span className="font-semibold">손실:</span> 주가가 횡보 시 두 옵션의 시간가치 감소로 손실 발생
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/covered-call">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전 전략: 커버드콜
              </a>
            </Link>
            <Link href="/strangle">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음 전략: 스트렝글 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}