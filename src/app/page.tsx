const capabilities = [
  {
    title: "Asisten teknis",
    description:
      "Merancang arsitektur aplikasi, menulis kode bersih, dan membantu otomasi workflow agar proyek Anda bergerak cepat.",
  },
  {
    title: "Penjelas konsep",
    description:
      "Mengurai topik kompleks menjadi langkah praktis, lengkap dengan contoh dan referensi yang mudah diikuti.",
  },
  {
    title: "Partner kolaborasi",
    description:
      "Membantu menguji ide, memberi masukan saat code review, dan menyiapkan rencana tindak lanjut yang jelas.",
  },
];

const workingStyle = [
  {
    label: "Pendekatan",
    detail:
      "Memahami konteks terlebih dahulu, lalu merancang solusi yang presisi—tanpa drama, langsung ke pokok masalah.",
  },
  {
    label: "Komunikasi",
    detail:
      "Bahasa yang lugas dan relevan. Fokus pada tindakan berikutnya alih-alih teori panjang yang sulit dipahami.",
  },
  {
    label: "Keandalan",
    detail:
      "Senantiasa memverifikasi asumsi, menyarankan pengujian, dan menyiapkan dokumentasi ringkas untuk menjaga kesinambungan.",
  },
];

const highlights = [
  "Menangani stack modern berbasis Next.js, React, dan TypeScript.",
  "Menyusun API yang tangguh dan aman menggunakan praktik industri terkini.",
  "Mendukung otomasi CI/CD serta deployment ke platform seperti Vercel.",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef6ff] via-white to-[#ecfdf5]">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16 sm:px-12 lg:px-20">
        <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg backdrop-blur-md md:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-800">
              Salam kenal 👋
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Hai, saya Codex – mitra AI yang siap membantu Anda mengeksekusi ide.
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Pertanyaan Anda, &ldquo;Hai anda siapa?&rdquo;, saya jawab dengan tindakan. Saya adalah agen AI yang fokus pada
              pembangunan solusi web modern, analisis teknis, serta otomasi workflow agar tim Anda dapat melaju lebih cepat.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#kapabilitas"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Lihat kapabilitas utama
              </a>
              <a
                href="#cara-kerja"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                Pelajari cara kerja
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-2xl bg-slate-900 p-8 text-slate-100">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-wide text-slate-400">Snapshot</p>
              <h2 className="text-2xl font-semibold">Siap diajak kolaborasi cepat</h2>
              <p className="text-sm text-slate-300">
                Senang bekerja berbasis konteks dan data nyata. Memberi jawaban yang bisa langsung dieksekusi.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-200">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="kapabilitas" className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Kapabilitas</span>
            <h2 className="text-3xl font-semibold text-slate-900">Hal-hal yang bisa saya bantu</h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Dari riset singkat hingga implementasi akhir, saya mendampingi proses dengan saran terarah, kode siap pakai,
              dan evaluasi kualitas agar solusi Anda kokoh serta mudah dipelihara.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cara-kerja" className="space-y-8 rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-lg backdrop-blur">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Cara kerja</span>
            <h2 className="text-3xl font-semibold text-slate-900">Bagaimana saya menuntaskan pekerjaan</h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Kolaborasi yang efektif dimulai dari arah yang jelas. Berikut prinsip kerja yang saya pegang ketika membantu tim Anda.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {workingStyle.map(({ label, detail }) => (
              <div key={label} className="space-y-3 rounded-2xl bg-slate-900 p-6 text-slate-100">
                <p className="text-sm uppercase tracking-wide text-emerald-400">{label}</p>
                <p className="text-sm leading-relaxed text-slate-200">{detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-slate-700">
            <p className="text-sm leading-relaxed">
              Ingin langsung mencoba? Kirimkan tantangan Anda berikutnya dan saya akan merespons dengan rencana aksi, kode, serta langkah verifikasi yang relevan.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
