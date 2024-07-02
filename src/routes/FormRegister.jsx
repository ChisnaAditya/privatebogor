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
import InputArea from "../components/Area";
import InputText from "../components/Input";
import SelectText from "../components/Select";
import RadioInput from "../components/Radio";
import TextModal from "../components/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast";
import AlertPopup from "../components/Alert";
import tesNomorHP from "../validasiNomor";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setuju) {
      console.log(form);
      setShowToast(true);
      navigate("/terimakasih");
    } else {
      setShowAlert(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [form.email, form.whatsapp]);
  return (
    <div className="container mx-auto">
      <div className="pt-10 mx-auto">
        <h1 className="text-2xl text-center font-bold">
          REGISTRASI PROGRAM PRIVATE DAN SEMI PRIVATE
        </h1>
        {/* <p>Silahkan mengisi form di bawah ini dengan lengkap</p> */}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mx-auto w-full"
      >
        <div className="rounded-xl shadow-sm p-10 ">
          <h2 className="mb-4 text-2xl font-bold">Data Diri</h2>
          <div className="grid grid-cols-2 gap-4">
            <InputText
              label="Nama"
              type="text"
              placeholder="Nama lengkap"
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
              placeholder="Nomor whatsapp"
              value={form.whatsapp}
              onChange={(e) => {
                setForm({
                  ...form,
                  whatsapp: e.target.value,
                });
              }}
              isInvalid={error.whatsapp}
              errorMessage="error"
            />
            <InputText
              label="Email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => {
                setForm({
                  ...form,
                  email: e.target.value,
                });
              }}
              isInvalid={error.email}
              errorMessage="error"
            />

            <InputText
              label="Kota Asal"
              type="text"
              placeholder="Kota asal"
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
              placeholder="Usia"
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
              onChange={(e) => {
                setForm({
                  ...form,
                  pendidikan: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl shadow-sm p-10 ">
          <h2 className="mb-4 text-2xl font-bold">Paket Program</h2>
          <RadioInput
            onChange={(e) => {
              setForm({
                ...form,
                isKursus: e.target.value,
              });
            }}
          />
          <div className="grid grid-cols-2 gap-4">
            <SelectText
              label="Program"
              listData={program}
              placeholder="Nama program belajar"
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
        <div className="rounded-xl shadow-sm p-10 relative">
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
        <Button type="submit" color="primary" className="w-full my-5">
          Daftar Sekarang
        </Button>
      </form>
    </div>
  );
}
