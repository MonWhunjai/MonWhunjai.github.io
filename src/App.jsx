import { useState } from 'react';
import './App.css';

// Import เฉพาะรูปโปรไฟล์และรูปโปรเจค (ส่วนไอคอน Skills เราจะใช้จากเว็บแทน)
import ProfileImg from './assets/images/mon01.png';
import ProjectApmImg from './assets/images/apm01.png';
import ProjectHlImg from './assets/images/hl01.png';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 antialiased selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MyPortfolio</span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li><a href="#about" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">เกี่ยวกับผม</a></li>
              <li><a href="#skills" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ทักษะ</a></li>
              <li><a href="#projects" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ผลงาน</a></li>
              <li><a href="#contact" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ติดต่อ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 min-h-screen flex items-center justify-center pt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-8">
            <div className="block lg:hidden mb-6">
              <img src={ProfileImg} alt="Profile Image" className="mx-auto w-50 h-40 object-cover rounded-full" />
            </div>
            <h1 className="max-w-5xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              สวัสดีครับ ผม <span className="text-blue-500">นายเจียรนัย แก้วโก</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              นิสิตมหาวิทยาลัยพะเยา (University of Phayao) สาขาวิทยาการคอมพิวเตอร์
              ที่มีความสนใจด้าน Frontend Development และการพัฒนา Web Application
            </p>
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800">
              ดูผลงานของผม
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
              ติดต่อผม
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-3 lg:flex justify-end">
            <img src={ProfileImg} alt="Profile Image" className="rounded-full w-80 h-80 object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">เกี่ยวกับผม</h2>
            <p className="mb-8 font-light text-gray-400 lg:text-xl">
              นี่คือประวัติการศึกษาและผลการเรียนของผมครับ
            </p>
            <div>
              <ul className="p-6 mb-4 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                <li>
                  <span className="text-2xl">📝</span>
                  <strong className="text-xl">มัธยมศึกษาตอนปลาย สายศิลป์ - ญี่ปุ่น</strong><br />
                  <p className="text-gray-400">
                    โรงเรียนปัว (Pua School)<br />
                    2563 - 2565<br />
                    เกรดเฉลี่ย: 2.50
                  </p>
                </li>
              </ul>
              <ul className="p-6 mb-4 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                <li>
                  <span className="text-2xl">📝</span>
                  <strong className="text-xl">ปริญญาตรี วิทยาการคอมพิวเตอร์</strong><br />
                  <p className="text-gray-400">
                    มหาวิทยาลัยพะเยา (University of Phayao)<br />
                    2566 - ปัจจุบัน<br />
                    เกรดเฉลี่ย: 2.81
                  </p>
                </li>
              </ul>
              <ul className="p-6 mb-4 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                <li>
                  <span className="text-2xl">💻</span>
                  <strong className="text-xl">ความสนใจในด้าน Frontend Development</strong><br />
                  <p className="text-gray-400">
                    ผมนั้นเริ่มสนใจ Frontend Development ตั้งแต่เริ่มเรียนรู้การเขียนโปรแกรม<br />
                    และชื่นชอบในการสร้าง User Interface ที่ใช้งานง่าย สำหรับผู้ใช้<br />
                    ผมมีความตั้งใจที่จะพัฒนาทักษะด้านนี้อย่างต่อเนื่อง
                  </p>
                </li>
              </ul>
              <ul className="p-6 mb-4 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                <li>
                  <span className="text-2xl">🎯</span>
                  <strong className="text-xl">เป้าหมายในการเรียนรู้</strong><br />
                  <p className="text-gray-400">
                    ผมมุ่งหวังที่จะ Fullstack Developer ที่มีความสามารถ พร้อมเรียนรู้สิ่งใหม่ๆ<br />
                    จากพี่เลี้ยงที่ฝึกงาน ไปจนถึงค้นคว้าด้วยตนเอง โดยเริ่มจากการเป็น Frontend Developer ก่อน
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Updated) */}
      <section id="skills" className="bg-gray-900 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-center text-white">ทักษะความสามารถ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center items-center">
            {/* HTML */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">HTML</p>
            </div>
            {/* React */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=react" alt="React Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">React</p>
            </div>
            {/* Next.js */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=nextjs" alt="Next Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">Next.js</p>
            </div>
            {/* JavaScript */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=js" alt="JavaScript Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">JavaScript</p>
            </div>
            {/* Tailwind */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">Tailwind</p>
            </div>
            {/* TypeScript */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">TypeScript</p>
            </div>
            {/* Git */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=git" alt="Git Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">Git</p>
            </div>
            {/* GitHub */}
            <div className="m-5 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-4">
              <img src="https://skillicons.dev/icons?i=github" alt="GitHub Logo" className="w-20 h-20 mx-auto" />
              <p className="text-gray-400 mt-2">GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-center text-white">ผลงานของผม</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Appointment Website</h5>
                  <a href="https://github.com/Kittigon/Online-Appointment-Booking-System" target="_blank" rel="noreferrer" className="inline-flex justify-end items-center px-3 py-2 mx-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-800">
                    Github
                  </a>
                </div>
                <p className="mb-2 font-normal text-gray-400">เป็นระบบจัดการนัดหมายออนไลน์กับทางศูนย์ให้คำปรึกษาของ มหาวิทยาลัยพะเยา ที่แบบเก่านั้นใช้การทักผ่านทางเพจเฟซบุ๊ก</p>
                <img src={ProjectApmImg} alt="Appointment Website" className="w-auto h-auto mb-4 mt-4 rounded-lg" />
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">Tech Stack</h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg">Next.js</span>
                  <span className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg">TypeScript</span>
                  <span className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg">REST API</span>
                  <span className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg">Supabase</span>
                  <span className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg">JWT</span>
                </div>
                <p className="mb-3 font-normal text-gray-500">เป็นระบบที่ผมได้ลงมือในการทำ Frontend และผู้ทำ Backend อย่าง Kittigon ที่อยู่หลุ่มโปรเจคต์เดียวกัน</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-shadow">
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Health Life (Startup HealthTech X2)</h5>
                  <a href="https://www.figma.com/proto/OL04Z2QL1H3PWJamAit5e1/HL-App-Project-Prototype?node-id=0-1&t=lwwYvIaSZE5YYnX4-1" target="_blank" rel="noreferrer" className="inline-flex justify-end items-center px-3 py-2 mx-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-800">
                    Link Prototype
                  </a>
                </div>
                <p className="mb-2 font-normal text-gray-400">เป็น Prototype ที่ทีมของผมนั้นได้ใช้ในการนำเสนอโครงการ Startup ที่เกี่ยวข้องกับสุขภาพ ในโครงการ HealthTech X2</p>
                <div className="flex justify-center">
                  <img src={ProjectHlImg} alt="Health Life Prototype" className="w-auto h-auto mb-4 mt-4 rounded-3xl" />
                </div>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-white">Tech Stack</h5>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg">Figma</span>
                </div>
                <p className="mb-3 font-normal text-gray-500">เป็น Prototype ที่ผมได้ทำการออกแบบ UX/UI กับทีมเพื่อนำเสนอ</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">ติดต่อผม</h2>
          <p className="mb-8 font-light text-center text-gray-400 sm:text-xl">
            หากสนใจร่วมงานหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อได้ตามช่องทางด้านล่างนี้ได้เลยครับ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://mail.google.com/mail/u/0/?to=jearanaikaewko@gmail.com&fs=1&tf=cm" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700">
              📧 Email
            </a>
            <a href="https://github.com/MonWhunjai" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700">
              🐙 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 rounded-lg shadow m-4 border-gray-700 ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-400 sm:text-center">© 2026 <a href="#" className="hover:underline">Jearanai</a>. สงวนลิขสิทธิ์</span>
        </div>
      </footer>

    </div>
  );
}

export default App;