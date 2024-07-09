import { Button, Checkbox } from "@nextui-org/react";
import {
  periode,
  program,
  jam,
  subject,
  jenjang,
  sk,
  kebijakan,
} from "../data";
import {
  NamaIcon,
  EmailIcon,
  WhatsappIcon,
  KotaIcon,
  PendidikanIcon,
  UsiaIcon,
  JamIcon,
  ProgramIcon,
  PeriodeIcon,
  SubjectIcon,
} from "../icon/Icons";
import InputArea from "../components/Area";
import InputText from "../components/Input";
import SelectText from "../components/Select";
import RadioInput from "../components/Radio";
import TextModal from "../components/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import AlertPopup from "../components/Alert";
import LogoLC from "../assets/LOGO LC.png";
import hero from "../assets/form-bogor-hero.png";
import heroo from "../assets/hero-private-bogor.jpg";
import axios from "axios";
export default function FormRegistrasi() {
  const [error, setError] = useState({});
  const [setuju, setSetuju] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    email: "",
    whatsapp: "",
    kota: "",
    usia: "",
    pendidikan: "",
    isKursus: "",
    program: "",
    periode: "",
    jam: "",
    subject: "",
    tujuan: "",
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    if (!form.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid.";
    }

    if (!form.whatsapp) {
      errors.whatsapp = "Phone is required.";
    } else if (!/^\+?([0-9]{2})\)?([0-9]{7,14})$/.test(form.whatsapp)) {
      errors.whatsapp = "Phone is invalid.";
    }
    setError(errors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setuju) {
      // console.log(form);
      const url = "https://bod.languagecenter.id/bogor-private";

      const dataLead = {
        nama: form.nama,
        email: form.email,
        nowa: form.whatsapp,
        // kota: form.kota,
        usia: form.usia,
        // pendidikan: form.pendidikan,
        // isKursus: form.isKursus,
        paket: form.program,
        periode: form.periode,
        jam: form.jam,
        subject: form.subject,
        tujuan: form.tujuan,
        tanggal: "tanggal",
        pj_pare: "pj_pare",
        utm_source: "utm_source",
        utm_medium: "utm_medium",
        utm_campaign: "utm_campaign",
        utm_content: "utm_content",
        utm_id: "utm_id",
      };

      try {
        // setIsLoading(!isLoading);
        setShowToast(true);
        await axios
          .post(url, dataLead, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            // setIsLoading(false);
            console.log(res);
            setShowToast(false);
            if (res.status === 200) {
              navigate(`/terimakasih`);
              // localStorage.setItem("namaku", data.nama);
            }
          });
      } catch (err) {
        console.log(err);
        alert("Coba Lagi");
      }
    } else {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [form.email, form.whatsapp]);
  return (
    <div className="flex flex-row-reverse">
      <div className="container px-2 lg:px-10 lg:basis-2/3 mx-auto h-screen overflow-x-scroll">
        <div className="flex flex-col-reverse gap-4 lg:flex-row justify-between py-5 w-full">
          <article>
            <h1 className="text-xl lg:text-2xl font-bold">
              REGISTRASI PROGRAM PRIVATE DAN SEMI PRIVATE
            </h1>
            <p>Silahkan mengisi form di bawah ini dengan lengkap</p>
          </article>
          <div>
            <img src={LogoLC} alt="logo lc" className="w-[100px]" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 mx-auto w-full"
        >
          <div className="rounded-xl shadow-xl backdrop-blur-xl backdrop-saturate-200 p-2 lg:p-10 bg-slate-50">
            <h2 className="mb-4 text-2xl font-bold">Data Diri</h2>
            <div className="grid lg:grid-cols-2 gap-4">
              <InputText
                label="Nama"
                type="text"
                placeholder="Nama lengkap"
                icon={<NamaIcon />}
                value={form.nama}
                onChange={(e) => {
                  setForm({
                    ...form,
                    nama: e.target.value,
                  });
                }}
              />
              <InputText
                label="No. WA"
                type="text"
                placeholder="Contoh: +6281234567890"
                icon={<WhatsappIcon />}
                value={form.whatsapp}
                onChange={(e) => {
                  setForm({
                    ...form,
                    whatsapp: e.target.value,
                  });
                }}
                isInvalid={error.whatsapp}
                errorMessage={error.whatsapp}
              />
              <InputText
                label="Email"
                type="email"
                placeholder="Contoh: mail@gmail.com"
                icon={<EmailIcon />}
                value={form.email}
                onChange={(e) => {
                  setForm({
                    ...form,
                    email: e.target.value,
                  });
                }}
                isInvalid={error.email}
                errorMessage={error.email}
              />

              <InputText
                label="Kota Asal"
                type="text"
                placeholder="Kota asal"
                icon={<KotaIcon />}
                value={form.kota}
                onChange={(e) => {
                  setForm({
                    ...form,
                    kota: e.target.value,
                  });
                }}
              />
              <InputText
                label="Usia"
                type="number"
                placeholder="Masukkan angka"
                icon={<UsiaIcon />}
                value={form.usia}
                onChange={(e) => {
                  setForm({
                    ...form,
                    usia: e.target.value,
                  });
                }}
              />
              <SelectText
                label="Jenjang Pendidikan"
                listData={jenjang}
                placeholder="Jenjang pendidikan"
                icon={<PendidikanIcon />}
                onChange={(e) => {
                  setForm({
                    ...form,
                    pendidikan: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl shadow-xl backdrop-blur-xl backdrop-saturate-200 p-2 lg:p-10 bg-slate-50">
            <h2 className="mb-4 text-2xl font-bold">Paket Program</h2>
            <RadioInput
              onChange={(e) => {
                setForm({
                  ...form,
                  isKursus: e.target.value,
                });
              }}
            />
            <div className="grid lg:grid-cols-2 gap-4">
              <SelectText
                label="Program"
                listData={program}
                placeholder="Nama program belajar"
                icon={<ProgramIcon />}
                onChange={(e) => {
                  setForm({
                    ...form,
                    program: e.target.value,
                  });
                }}
              />
              <SelectText
                label="Jam Belajar"
                listData={jam}
                placeholder="Pilihan jam belajar"
                icon={<JamIcon />}
                onChange={(e) => {
                  setForm({
                    ...form,
                    jam: e.target.value,
                  });
                }}
              />
              <SelectText
                label="Periode"
                listData={periode}
                placeholder="Periode program"
                icon={<PeriodeIcon />}
                onChange={(e) => {
                  setForm({
                    ...form,
                    periode: e.target.value,
                  });
                }}
              />
              <SelectText
                label="Subject"
                listData={subject}
                placeholder="Subject program"
                icon={<SubjectIcon />}
                onChange={(e) => {
                  setForm({
                    ...form,
                    subject: e.target.value,
                  });
                }}
              />
            </div>
            <InputArea
              label="Tujuan"
              placeholder="Tujuan belajar bahasa Inggris"
              onChange={(e) => {
                setForm({
                  ...form,
                  tujuan: e.target.value,
                });
              }}
            />
          </div>
          <div className="rounded-xl shadow-xl backdrop-blur-xl backdrop-saturate-200 p-2 lg:p-10 relative">
            <h2 className="mb-4 text-xl font-bold">Lain-Lain</h2>
            <div className="flex gap-4 mb-2">
              <TextModal title="Syarat dan Ketentuan" content={sk} />
              <TextModal title="Kebijakan Privasi" content={kebijakan} />
            </div>
            <Checkbox
              classNames={{
                label: "text-small",
              }}
              isSelected={setuju}
              onValueChange={setSetuju}
            >
              Saya secara sadar telah setuju dengan semua syarat/ketentuan dan
              kebijakan privasi
            </Checkbox>
            {showToast && <Toast />}
            {showAlert ? <AlertPopup /> : ""}
          </div>
          <Button
            type="submit"
            className="w-full my-5 shadow-lg bg-yellow-400 font-bold"
          >
            Daftar Sekarang
          </Button>
        </form>
      </div>
      <div className="hidden lg:flex lg:basis-1/3 h-screen bg-yellow-400 rounded-e-[2rem]">
        {/* <img alt="hero image private bogor" src={heroo} /> */}
      </div>
    </div>
  );
}
