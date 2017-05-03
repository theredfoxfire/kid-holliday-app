// @flow

let {describe, it} = global;

import expect from 'expect';
import {
  validatePests,
  validatePestDetail,
  validateDiseases,
  validateDiseaseDetail,
} from '../PestDisease';

let examplePests = {
  result: 'sukses',
  message: [
    {
      id: 28,
      hama: 'ANJING TANAH/ ORONG-ORONG PADA PADI',
      gejala: [
        'Merusak tanaman muda dan melonggarkan tanah di sekitar perakaran.',
        'Serangga muda memakan humus dan akar tanaman.',
        'Memotong tanaman pada bagian pangkal batang di bawah tanah dan bagian akar muda sehingga menyebabkan batang putus dan busuk (mati).',
      ],
      pengendalian: [
        'Rotasi tanaman dengan tanaman selain padi.',
        'Pengolahan dan perataan tanah untuk membunuh larva dan pupa yang ada di dalam tanah.',
        'Penggenangan lahan selama 3-4 hari untuk membunuh telur dan larva.',
        'Pengaturan waktu tanam yaitu menanam pada musim hujan.',
        'Aplikasi insektisida jika diperlukan.',
      ],
      penyebab: 'Gryllotalpa hirsuta',
      deskripsi: 'Menyerang pada persemaian dan tanaman muda.',
      photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01463912415.jpg',
      created_at: '21-05-2016',
      updated_at: '22-05-2016',
    },
    {
      id: 78,
      hama: 'BELALANG PADA JAGUNG',
      gejala: [
        'Gejala serangan berupa adanya bekas gigitan pada permukaan daun.',
        'Bila serangan parah seluruh daun akan habis dimakan.',
      ],
      pengendalian: [
        'Melakukan pengolahan tanah untuk mempermudah mengambil telur yang tertimbun.',
        'Gropyokan mencari kelompok belalang.',
      ],
      penyebab: 'Locusta migratoria',
      deskripsi: 'Serangan tinggi pada musim kemarau. Menyerang pada semua fase pertumbuhan tanaman.',
      photo: '',
      created_at: '21-05-2016',
      updated_at: '21-05-2016',
    },
  ],
};

let examplePestDetail = {
  result: 'sukses',
  message: {
    id: 1,
    hama: 'LALAT PADA KACANG-KACANGAN',
    gejala: [
      'Daun berbintik putih, kemudian menjadi kuning dengan titik coklat ditengahnya.',
      'Titik coklat tesebut merupakan tempat/ bekas tusukan hama sewaktu mengisap cairan tanaman dan tempat meletakkan telur.',
    ],
    pengendalian: [
      'Pergiliran tanaman.',
      'Penanaman serempak.',
      'Penggunaan mulsa pada lahan pertanaman.',
      'Tanaman yang terserang segera dicabut, dibakar atau dipendam dalam tanah.',
      'Aplikasi insektisida pada umur tanaman 8-10 hari.',
    ],
    penyebab: 'Ophiomya phaseoli, Agromyza phaseoli',
    deskripsi: 'Gejala menyerang daun tanaman muda.',
    photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01463903321.jpeg',
    created_at: '21-05-2016',
    updated_at: '22-05-2016',
    galleries: [
      {
        primary: true,
        photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01463903321.jpeg',
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_0image01463903321.jpeg',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_1image11463903321.jpg',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_2image21463903321.jpg',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_3image31463903321.jpg',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_4image41463903321.jpg',
      },
    ],
  },
};

let exampleDiseases = {
  result: 'sukses',
  message: [
    {
      id: 46,
      penyakit: 'ANTRAKNOSA PADA BAWANG',
      gejala: [
        'Tanaman mati mendadak.',
        'Gejala awal berupa bercak kecil pada daun, meluas dan berubah warna menjadi kehijauan.',
        'Daun-daun bawah rebah karena serangan membuat pangkal daun mengecil.',
        'Infeksi biasanya bersifat tidak merata sehingga pertanaman kelihatan kosong di beberapa tempat dan benang-benang jamur dapat menyebar ke tanaman lain.',
      ],
      pengendalian: [
        'Jarak tanaman diperlebar saat musim hujan.',
        'Memperbaiki sistem pengairan, hindari air tergenang.',
        'Rotasi tanaman.',
        'Mengatur waktu tanam yang tepat.',
        ' Menggunakan benih yang berasal dari tanaman sehat.',
        'Melakukan sanitasi dan pembakaran sisa-sisa tanaman yang terserang.',
        'Aplikasi fungisida yang efektif.',
      ],
      penyebab: 'Jamur  Colletotrichum gloeosporioides',
      deskripsi: 'Jamur dapat menyerang umbi pada saat musim hujan. Biasanya dapat  menyerang tanaman pada umur 5-9 MST (Minggu Setelah Tanam). Serangan bertambah parah pada kondisi cuaca lembap.',
      photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01464051518.jpg',
      created_at: '21-05-2016',
      updated_at: '24-05-2016',
    },
    {
      id: 50,
      penyakit: 'ANTRAKNOSA PADA CABAI',
      gejala: [
        'Gejala awal terdapat bercak coklat kehitaman, meluas menjadi busuk lunak di tengah bercak terdapat titik-titik hitam.',
        'Serangan yang berat menyebabkan seluruh buah keriput dan mengering.',
      ],
      pengendalian: [
        'Pergiliran tanaman.',
        'Perbaikan drainase.',
        'Penentuan waktu tanam.',
        'Penggunaan bibit sehat.',
        'Penanaman varietas tahan.',
        'Menggunakan mulsa hitam perak, agar panas dari matahari dapat dipantulkan ke tanaman.',
        'Pengaturan jarak tanam, agar lingkungan tidak terlalu lembap.',
      ],
      penyebab: 'Jamur Colletotrichum capsici',
      deskripsi: 'Keadaan cuaca panas dan lembap mempercepat perkembangan penyakit. Jamur dapat bertahan dalam sisa-sisa tanaman sakit.',
      photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01464052176.JPG',
      created_at: '21-05-2016',
      updated_at: '24-05-2016',
    },
  ],
};

let exampleDiseaseDetail = {
  result: 'sukses',
  message: {
    id: 50,
    penyakit: 'ANTRAKNOSA PADA CABAI',
    gejala: [
      'Gejala awal terdapat bercak coklat kehitaman, meluas menjadi busuk lunak di tengah bercak terdapat titik-titik hitam.',
      'Serangan yang berat menyebabkan seluruh buah keriput dan mengering.',
    ],
    pengendalian: [
      'Pergiliran tanaman.',
      'Perbaikan drainase.',
      'Penentuan waktu tanam.',
      'Penggunaan bibit sehat.',
      'Penanaman varietas tahan.',
      'Menggunakan mulsa hitam perak, agar panas dari matahari dapat dipantulkan ke tanaman.',
      'Pengaturan jarak tanam, agar lingkungan tidak terlalu lembap.',
    ],
    penyebab: 'Jamur Colletotrichum capsici',
    deskripsi: 'Keadaan cuaca panas dan lembap mempercepat perkembangan penyakit. Jamur dapat bertahan dalam sisa-sisa tanaman sakit.',
    photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01464052176.JPG',
    created_at: '21-05-2016',
    updated_at: '24-05-2016',
    galleries: [
      {
        primary: true,
        photo: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/image01464052176.JPG',
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_0image01464052176.JPG',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_1image11464052176.jpg',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_2image21464052176.JPG',
      },
      {
        primary: false,
        photo_thumb: 'http://ingkarsa.com/uploads/qarsa/pests-diseases/thumbnails/thumb_3image31464052176.jpg',
      },
    ],
  },
};

describe('Pest and Disease Response Validator', () => {
  it('should validate response data of pests endpoint', () => {
    expect(validatePests(examplePests)).toNotEqual(null);
    expect(validatePests({foo: 123, bar: '123'})).toEqual(null);
  });

  it('should validate response data of pestDetail endpoint', () => {
    expect(validatePestDetail(examplePestDetail)).toNotEqual(null);
    expect(validatePestDetail({foo: 123, bar: '123'})).toEqual(null);
  });

  it('should validate response data of diseases endpoint', () => {
    expect(validateDiseases(exampleDiseases)).toNotEqual(null);
    expect(validateDiseases({foo: 123, bar: '123'})).toEqual(null);
  });

  it('should validate response data of diseaseDetail endpoint', () => {
    expect(validateDiseaseDetail(exampleDiseaseDetail)).toNotEqual(null);
    expect(validateDiseaseDetail({foo: 123, bar: '123'})).toEqual(null);
  });
});
