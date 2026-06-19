import Link from 'next/link'

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      
      {/* --- เอฟเฟกต์พื้นหลังดุ๊กดิ๊กเรืองแสง (Background Floating Orbs) --- */}
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 animate-blob rounded-full bg-blue-100 opacity-70 blur-3xl filter mix-blend-multiply transition-all duration-1000"></div>
      <div className="animation-delay-2000 absolute top-0 right-1/4 -z-10 h-72 w-72 animate-blob rounded-full bg-purple-100 opacity-70 blur-3xl filter mix-blend-multiply transition-all duration-1000"></div>
      
      {/* พื้นหลังไล่เฉดสีจางๆ เพิ่มมิติ */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/40 via-white to-slate-50"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* --- ฝั่งซ้าย: ข้อความและปุ่ม --- */}
          <div className="text-center lg:text-left">
            {/* แท็กสไตล์กระจกเงา (Glassmorphism) */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/60 px-4 py-1.5 text-sm font-medium text-indigo-600 shadow-sm backdrop-blur-md">
              🚀 Welcome to Our Website
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              สร้างอนาคตด้วย
              <span className="mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                เทคโนโลยีและนวัตกรรม
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">
              พัฒนาเว็บไซต์ แอปพลิเคชัน และระบบสารสนเทศ
              ด้วยเทคโนโลยีสมัยใหม่ เพื่อยกระดับองค์กรของคุณให้ก้าวไกลกว่าใคร
            </p>

            {/* ปุ่มกดพร้อมเอฟเฟกต์ Hover และเงาพรีเมียม */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/about"
                className="group relative inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-md shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
              >
                เรียนรู้เพิ่มเติม
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          {/* --- ฝั่งขวา: รูปภาพและเอฟเฟกต์เงา --- */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              
              {/* เอฟเฟกต์เงาเรืองแสงหลังรูปภาพ */}
              <div className="absolute inset-0 -z-10 animate-pulse rounded-3xl bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 blur-3xl"></div>
              
              {/* กรอบรูปภาพสไตล์โมเดิร์น */}
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-3 shadow-2xl shadow-slate-200 transition-all duration-300 hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
                  alt="Technology"
                  className="w-full rounded-2xl object-cover"
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}