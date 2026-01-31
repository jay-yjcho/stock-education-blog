import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import AdComponent from '../components/AdComponent';

export default function Strangle() {
  return (
    <Layout title="스트렝글 (Strangle) 전략">
      <Head>
        <title>스트렝글 (Strangle) 전략 - 주식 용어 백과사전</title>
        <meta name="description" content="주식 스트렝글 전략에 대한 상세 설명과 국내 종목 예시" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <article className="prose prose-blue max-w-none dark:prose-invert">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">스트렝글 (Strangle) 전략</h1>
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">정의</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              스트렝글(Strangle)은 스트래들과 유사하지만 서로 다른 행사가격의 콜 옵션과 풋 옵션을 매수하는 전략입니다. 일반적으로 콜 옵션은 현재 주가보다 높은 가격, 풋 옵션은 현재 주가보다 낮은 가격의 옵션을 선택합니다. 이 전략은 스트래들보다 저렴한 비용으로 유사한 변동성 베팅을 할 수 있어 효율적인 전략입니다.
            </p>
          </div>
          
          <AdComponent slot="7894561236" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">특징</h2>
            <ul className="list-disc pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base mb-6">
              <li><span className="font-semibold">낮은 비용:</span> 스트래들보다 저렴한 프리미엄으로 동일한 전략 구사 가능</li>
              <li><span className="font-semibold">변동성 베팅:</span> 주가 방향이 아닌 큰 변동성에 베팅</li>
              <li><span className="font-semibold">손익 구조:</span> 주가가 특정 범위를 벗어날 경우 수익 실현</li>
              <li><span className="font-semibold">손실 제한:</span> 최대 손실은 옵션 프리미엄 지불액으로 제한</li>
              <li><span className="font-semibold">시간가치 감소:</span> 여전히 시간가치 감소의 영향을 받음</li>
            </ul>
          </div>
          
          <AdComponent slot="7894561237" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">국내 유명 종목 예시 (5개)</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              아래는 스트렝글 전략에 자주 활용되는 국내 변동성이 큰 종목들입니다:
            </p>
            <ol className="list-decimal pl-5 sm:pl-6 text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><span className="font-semibold">삼성바이오로직스 (207940):</span> 바이오 업종으로 임상 결과 발표 등 이벤트에 따른 급등락이 잦아 스트렝글 전략에 적합함.</li>
              <li><span className="font-semibold">NAVER (035420):</span> IT 대표주로 정기적인 실적 발표나 규제 이슈에 민감한 반응을 보임.</li>
              <li><span className="font-semibold">현대자동차 (005380):</span> 자동차 업황 변화와 전기차 정책 영향을 받아 변동성이 큰 종목.</li>
              <li><span className="font-semibold">SK이노베이션 (096770):</span> 석유화학 및 배터리 업종으로 국제유가 및 정책 변화에 민감한 반응.</li>
              <li><span className="font-semibold">한국항공우주 (047810):</span> 방산주로 정부 정책 및 수주 소식에 따라 큰 변동성이 발생함.</li>
            </ol>
          </div>
          
          <AdComponent slot="7894561238" />
          
          <div className="card p-4 sm:p-6 mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">전략 구사 방법</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              1. <span className="font-semibold">옵션 선택:</span> 동일 종목의 서로 다른 행사가격 콜/풋 옵션 선택 (ATM 기준으로 OTM 옵션)
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              2. <span className="font-semibold">동시 매수:</span> 높은 행사가격 콜 옵션 + 낮은 행사가격 풋 옵션 매수
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              3. <span className="font-semibold">이벤트 대기:</span> 주가가 특정 방향으로 크게 움직이기를 기다림
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-4 text-sm sm:text-base">
              4. <span className="font-semibold">수익:</span> 주가가 높은 행사가격 초과 시 콜 옵션 수익, 낮은 행사가격 미만 시 풋 옵션 수익
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              5. <span className="font-semibold">손실:</span> 주가가 두 행사가격 사이에 머무를 경우 두 옵션 모두 손실
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700 gap-4 sm:gap-0">
            <Link href="/straddle">
              <a className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm sm:text-base text-center sm:text-left">
                ← 이전 전략: 스트래들
              </a>
            </Link>
            <Link href="/iron-condor">
              <a className="btn-primary text-sm sm:text-base px-4 py-2">
                다음 전략: 아이언콘도 →
              </a>
            </Link>
          </div>
        </article>
      </div>
    </Layout>
  );
}