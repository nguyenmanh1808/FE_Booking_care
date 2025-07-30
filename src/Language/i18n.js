import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import file dịch
const resources = {
  en: {
    translation: {
      support: "Support",
      specialized: "Specialized",
      findDoctor:'Find a doctor by specialty',
       mediacal:'Medical facility',
       chooseHospital:'Choose a hospital hospital',
       package :'Examination package',
       general:'General health check',
       login:'Log in',
       res:"Sign up"
    }
  },
  vi: {
    translation: {
        support: "Hỗ trợ",
        specialized: "Chuyên khoa",
        findDoctor:'Tìm bác sỹ theo chuyên khoa',
        mediacal:'Cơ sở y tế',
        chooseHospital:'Chọn bệnh viện phòng khám',
        package:'Gói khám',
        general:'Khám sức khỏe tổng quát',
        login:'Đăng nhập',
       res:"Đăng ký"
    }
  }
};

// Khởi tạo i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "vi", // Ngôn ngữ mặc định
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
