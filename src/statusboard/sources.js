// List of third-party machine readable data sources by prefectures. 

const sources = {
  aichi: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/code4nagoya/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.aichi.jp/site/covid19-aichi/corona-kisya.html',
      summary: 'https://www.pref.aichi.jp/site/covid19-aichi/kansensya-kensa.html'
    },
    source: 'https://github.com/code4nagoya/covid19',
    dashboard: 'https://stopcovid19.code4.nagoya/',
    cities: {
      nagoya: {
        gov: { patients: 'http://www.city.nagoya.jp/kenkofukushi/page/0000126920.html'  } 
      },
      toyohashi: {
        gov: { patients: 'https://www.city.toyohashi.lg.jp/41805.htm' }
      },
      okasaki: { gov: { patients: 'https://www.city.okazaki.lg.jp/1550/1562/1615/p025980.html' } }
    }
  },
  akita: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/asaba-zauberer/covid19-akita/development/data/data.json',
      key: 'patients.data'
    },
    gov: { patients: 'https://www.pref.akita.lg.jp/pages/archive/47957' },
    source: 'https://github.com/asaba-zauberer/covid19-akita/tree/development/data',
    dashboard: 'https://covid19-akita.netlify.app/en'
  },
  aomori: {
    patients: {
      format: 'csv',
      encoding: 'SJIS',
      url: 'https://opendata.pref.aomori.lg.jp/dataset/1531/resource/11178/20200411_%E9%99%BD%E6%80%A7%E6%82%A3%E8%80%85%E9%96%A2%E4%BF%82.csv',
      index: 'https://opendata.pref.aomori.lg.jp/api/package_show?id=5e4612ce-1636-41d9-82a3-c5130a79ffe0',
      todo: 'Have to use the API to show the latest URL to download.'
    },
    tests: {
      format: 'csv',
      url: 'https://opendata.pref.aomori.lg.jp/dataset/1531.html'
    },
    gov: {
      patients: 'http://www.pref.aomori.lg.jp/welfare/health/wuhan-novel-coronavirus2020.html'
    },
    index: 'https://opendata.pref.aomori.lg.jp/api/package_show?id=5e4612ce-1636-41d9-82a3-c5130a79ffe0',
    source: [ 'https://opendata.pref.aomori.lg.jp/dataset/1531.html' ],
    dashboard: 'https://covid19.codeforaomori.org/'
  },
  chiba: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/civictechzenchiba/covid19-chiba/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.chiba.lg.jp/shippei/press/2019/ncov-index.html'
    },
    source: 'https://github.com/civictechzenchiba/covid19-chiba',
    dashboard: 'https://covid19.civictech.chiba.jp/'
  },
  ehime: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/ehime-covid19/covid19/master/data/data.json',
    },
    gov: {
      patients: 'https://www.pref.ehime.jp/h25500/kansen/covid19.html'
    },
    source: 'https://github.com/ehime-covid19/covid19',
    dashboard: 'https://ehime-covid19.com/'
  },

  fukui: {
    patients: {
      format: 'csv',
      url: 'https://www.pref.fukui.lg.jp/doc/toukei-jouhou/covid-19_d/fil/covid19_patients.csv'
    },
    tests: {
      format: 'csv',
      url: 'https://www.pref.fukui.lg.jp/doc/toukei-jouhou/covid-19_d/fil/covid19_test_count.csv'
    },
    gov: {
      patients: 'https://www.pref.fukui.lg.jp/doc/kenkou/corona/jyoukyou.html',
      summary: 'https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html'
    },
    dashboard: 'https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html'
  },
  fukuoka: {
    patients: {
      format: 'csv',
      url: 'https://ckan.open-governmentdata.org/dataset/8a9688c2-7b9f-4347-ad6e-de3b339ef740/resource/c27769a2-8634-47aa-9714-7e21c4038dd4/download/400009_pref_fukuoka_covid19_patients.csv'
    },
    tests: {
      format: 'csv',
      url: 'https://ckan.open-governmentdata.org/dataset/ef64c68a-d89e-4b1b-a53f-d2535ebfa3a1/resource/aab43191-40d0-4a6a-9724-a9030a596009/download/400009_pref_fukuoka_covid19_exam.csv'
    },
    gov: {
      patients: 'https://www.pref.fukuoka.lg.jp/contents/covid19-hassei.html',
      summary: 'https://www.pref.fukuoka.lg.jp/contents/covid19-hassei.html',
    },
    source: 'https://ckan.open-governmentdata.org/dataset/401000_pref_fukuoka_covid19_patients',
    dashboard: 'https://fukuoka.stopcovid19.jp/',
  },
  fukushima: {
    patients: {
      format: 'csvdir',
      encoding: 'sjis',
      url: 'http://www.pref.fukushima.lg.jp/w4/covid19/patients/'
    },
    gov: {
      patients: 'https://www.pref.fukushima.lg.jp/sec/21045c/fukushima-hasseijyoukyou.html'
    },
    source: 'http://www.pref.fukushima.lg.jp/w4/covid19/patients/',
    dashboard: 'https://fukushima-covid19.firebaseapp.com/'
  },
  gifu: {
    patients: {
      format: 'csv',
      encoding: 'sjis',
      url: 'https://data.gifu-opendata.pref.gifu.lg.jp/dataset/4661bf9d-6f75-43fb-9d59-f02eb84bb6e3/resource/9c35ee55-a140-4cd8-a266-a74edf60aa80/download/210005gifucovid19patients.csv',
      index: 'https://data.gifu-opendata.pref.gifu.lg.jp/dataset/c11223-001/resource/9c35ee55-a140-4cd8-a266-a74edf60aa80'
    },
    gov: {
      patients: 'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona_kansendoko.html',
      summary: 'https://www.pref.gifu.lg.jp/kinkyu-juyo-joho/shingata_corona_kansendoko.html'
    },
    source: 'https://github.com/CODE-for-GIFU/covid19/blob/development/api/sheet.js',
    dashboard: 'https://covid19-gifu.netlify.app/',
  },
  gunma: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/bpr-gunma/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.gunma.jp/07/z87g_00016.html',
      summary: 'https://stopcovid19.pref.gunma.jp/'
    },
    source: 'https://github.com/bpr-gunma/covid19',
    dashboard: 'https://stopcovid19.pref.gunma.jp/'
  },
  hiroshima: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/tatsuya1970/covid19/development/data/data.json',
    },
    gov: {
      patients: 'https://www.pref.hiroshima.lg.jp/soshiki/57/covid19-cases.html',
      summary: 'https://www.pref.hiroshima.lg.jp/soshiki/57/covid19-cases.html',
    },
    source: 'https://github.com/tatsuya1970/covid19',
    dashboard: 'https://covid19-hiroshima.netlify.app/en'
  },
  hokkaido: {
    patients: {
      format: 'csv',
      encoding: 'SJIS',
      url: 'https://www.harp.lg.jp/opendata/dataset/1369/resource/2828/patients.csv'
    },
    gov: {
      patients: 'http://www.pref.hokkaido.lg.jp/hf/kth/kak/hasseijoukyou.htm',
      summary: 'http://www.pref.hokkaido.lg.jp/ss/tkk/singatakoronahaien.htm',
    },
    cities: {
      sapporo: {
        gov: { 
          patients: 'https://www.city.sapporo.jp/hokenjo/f1kansen/2019n-covhassei.html' ,
          summary: 'https://www.city.sapporo.jp/hokenjo/f1kansen/2019n-covhassei.html'
        }
      }
    },
    source: [ 'https://www.harp.lg.jp/opendata/dataset/1369.html' ],
    dashboard: 'https://stopcovid19.hokkaido.dev/'
  },
  hyogo: {
    patients: {
      format: 'json',
      key: 'data',
      url: 'https://raw.githubusercontent.com/stop-covid19-hyogo/covid19/development/data/patients.json'
    },
    gov: {
      patients: 'https://web.pref.hyogo.lg.jp/kk03/corona_hasseijyokyo.html'
    },
    cities: {
      himeji: {
        gov: {
          patients: 'https://www.city.himeji.lg.jp/emergencyinfo/0000000179.html',
        }
      },
      nishinomiya: {
        gov: {
          patients: 'https://www.nishi.or.jp/kurashi/anshin/infomation/k_00022020111.html',
          summary: 'https://www.nishi.or.jp/kurashi/anshin/infomation/k_00022020111.html'
        }
      }
    },
    source: 'https://github.com/stop-covid19-hyogo/covid19',
    dashboard: 'https://stop-covid19-hyogo.org/'
  },
  ibaraki: {
    patients: {
      format: 'json',
      key: 'patients.data',
      url: 'https://raw.githubusercontent.com/a01sa01to/covid19-ibaraki/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.ibaraki.jp/1saigai/2019-ncov/hassei.html'
    },
    source: 'https://github.com/a01sa01to/covid19-ibaraki/tree/development/data',
    dashboard: 'https://ibaraki.stopcovid19.jp/'
  },
  ishikawa: {
    patients: {
      format: 'json',
      key: 'data',
      url: 'https://raw.githubusercontent.com/Retsuki/covid19-ishikawa-scraper/master/src/data.json'
    },
    gov: {
      patients: 'https://www.pref.ishikawa.lg.jp/kansen/coronakennai.html',
      summary: 'https://www.pref.ishikawa.lg.jp/kansen/coronakennai.html'
    },
    source: 'https://github.com/Retsuki/covid19-ishikawa',
    dashboard: 'https://ishikawa-covid19.netlify.app/'
  },
  kagawa: {
    patients: {
      format: 'json',
      key: 'data',
      url: 'https://raw.githubusercontent.com/codeforkagawa/covid19/development/data/patients.json'
    },
    gov: {
      patients: 'https://www.pref.kagawa.lg.jp/content/dir1/dir1_6/dir1_6_1/index.shtml'
    },
    source: 'https://github.com/codeforkagawa/covid19',
    dashboard: 'https://kagawa.stopcovid19.jp/en'
  },
  kanagawa: {
    patients: {
      format: 'csv',
      encoding: 'SJIS',
      url: 'http://www.pref.kanagawa.jp/osirase/1369/data/csv/patient.csv'
    },
    gov: {
      patients: 'https://www.pref.kanagawa.jp/docs/ga4/bukanshi/occurrence.html',
      pressRelease: 'https://www.pref.kanagawa.jp/prs/list-2020-1-1.html',
      summary: 'https://www.pref.kanagawa.jp/docs/ga4/bukanshi/occurrence.html'
    },
    cities: {
      chigasaki: {
        gov: { 
          patients: 'https://www.city.chigasaki.kanagawa.jp/kenko/1022933/1038284.html',
          pressReleases: 'https://www.city.chigasaki.kanagawa.jp/koho/1030702/1038773/index.html'
        }
      },
      fujisawa: {
        gov: { patients: 'https://www.city.fujisawa.kanagawa.jp/hokenyobo/kansensho/korona.html' }
      },
      kawasaki: {
        gov: { patients: 'http://www.city.kawasaki.jp/350/page/0000115886.html' }
      },
      sagamihara: {
        gov: { patients: 'https://www.city.sagamihara.kanagawa.jp/shisei/koho/1019191.html' }
      },
      yokohama: {
        gov: { 
          patients: 'https://www.city.yokohama.lg.jp/kurashi/kenko-iryo/yobosesshu/kansensho/coronavirus/kanja.html' ,
          summary: 'https://www.city.yokohama.lg.jp/city-info/koho-kocho/koho/topics/corona-data.html'
        },
        dashboard: 'https://covid19.yokohama/',
        source: 'https://github.com/covid19yokohama/covid19'
      },
      yokosuka: {
        gove: { patients: 'https://www.city.yokosuka.kanagawa.jp/3130/hasseijoukyou.html' }
      },
    },
    dashboard: 'https://www.pref.kanagawa.jp/osirase/1369/'
  },
  kagoshima: {
    gov: {
      patients: 'https://www.pref.kagoshima.jp/ae06/kenko-fukushi/kenko-iryo/kansen/kansensho/coronavirus.html'
    },
    dashboard: 'https://covid19.code4kagoshima.org/en',
  },
  kochi: {
    gov: {
      patients: 'https://www.pref.kochi.lg.jp/soshiki/130401/2020022900049.html',
    }
  },
  kumamoto: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/codeforkumamoto/covid19/development/data/data.json',
    },
    gov: {
      patients: 'https://www.pref.kumamoto.jp/kiji_32300.html',
      data: 'https://www.pref.kumamoto.jp/common/UploadFileOutput.ashx?c_id=3&id=22038&sub_id=7&flid=231833',
      dataIndex: 'https://www.pref.kumamoto.jp/kiji_22038.html',
    },
    cities: {
      kumamotoCity: { gov: { patients: 'https://www.city.kumamoto.jp/corona/hpKiji/pub/detail.aspx?c_id=5&id=27681&class_set_id=22&class_id=3261 '}}
    },
    source: 'https://github.com/codeforkumamoto/covid19',
    dashboard: 'https://kumamoto.stopcovid19.jp/',
  },
  kyoto: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/stopcovid19-kyoto/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.kyoto.jp/kentai/news/novelcoronavirus.html#F'
    },
    cities: {
      kyotoCity: {
        gov: {
          news: 'https://www.city.kyoto.lg.jp/',
          patients: 'https://www.city.kyoto.lg.jp/hokenfukushi/page/0000266641.html'
        }
      },
      muko: {
        gov: {
          patients: 'https://www.city.muko.kyoto.jp/kurashi/kinkyu/1585565517890.html'
        }
      }
    },
    source: 'https://github.com/stopcovid19-kyoto/covid19',
    dashboard: 'https://stopcovid19-kyoto.netlify.app/',
  },
  mie: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/FlexiblePrintedCircuits/covid19-mie/develop/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.mie.lg.jp/covid19.shtm'
    },
    source: 'https://github.com/FlexiblePrintedCircuits/covid19-mie',
    dashboard: 'https://mie.stopcovid19.jp/',
  },
  miyagi: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/code4shiogama/covid19-miyagi/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.miyagi.jp/site/covid-19/02.html',
      summary: 'https://www.pref.miyagi.jp/site/covid-19/02.html'
    },
    cities: {
      sendai: {
        gov: {
          patients: 'https://www.city.sendai.jp/kikikanri/kinkyu/200131corona2.html'
        }
      }
    },
    source: 'https://github.com/code4shiogama/covid19-miyagi/tree/development/data',
    dashboard: 'https://miyagi.stopcovid19.jp/'
  },
  miyazaki: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/covid19-miyazaki/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.miyazaki.lg.jp/kenko/hoken/kansensho/covid19/hassei.html'
    },
    source: 'https://github.com/covid19-miyazaki/covid19',
    dashboard: 'https://covid19-miyazaki.netlify.app/'
  },
  nagano: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/kanai3id/covid19/development/data/data.json',
    },
    gov: {
      patients: 'https://www.pref.nagano.lg.jp/koho/koho/pressreleases/2004happyoshiryo.html'
    },
    cities: {
      naganoCity: {
        gov: {
          patients: 'https://www.city.nagano.nagano.jp/site/covid19-joho/449132.html'
        }
      }
    },
    source: 'https://github.com/kanai3id/covid19',
    dashboard: 'https://covid19-nagano.info/en'
  },
  nagasaki: {
    gov: {
      patients: 'https://www.pref.nagasaki.jp/bunrui/hukushi-hoken/kansensho/corona_nagasaki/corona_nagasaki_shousai/'
    },
    source: 'https://github.com/CodeForNagasaki/covid19',
    dashboard: 'https://nagasaki.stopcovid19.jp/'
  },
  nara: {
    naracity: {
      patients: {
        format: 'json',
        url: 'https://raw.githubusercontent.com/code4nara/covid19/development/data/data_naracity.json'
      }
    },
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/code4nara/covid19/development/data/data.json'
    },
    gov: {
      patients: 'http://www.pref.nara.jp/module/1356.htm#moduleid1356'
    },
    source: 'https://github.com/code4nara/covid19',
    dashboard: 'https://stopcovid19.code4nara.org/'
  },
  niigata: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/CodeForNiigata/covid19/development/data/data.json',
    },
    gov: {
      patients: 'https://www.pref.niigata.lg.jp/site/shingata-corona/hasseijokyo-covid19-niigataken.html',
      summary: 'https://www.pref.niigata.lg.jp/site/shingata-corona/hasseijokyo-covid19-niigataken.html'
    },
    cities: {
      niigataCity: {
        gov: {
          patients: 'https://www.city.niigata.lg.jp/iryo/kenko/yobou_kansen/kansen/coronavirus.html'
        }
      }
    },
    source: 'https://github.com/CodeForNiigata/covid19',
    dashboard: 'https://niigata.stopcovid19.jp/'
  },
  oita: {
    patients: {
      format: 'csv',
      url: 'https://data.bodik.jp/dataset/f632f467-716c-46aa-8838-0d535f98b291/resource/3714d264-70f3-4518-a57a-8391e0851d7d/download/440001oitacovid19patients.csv'
    },
    tests: {
      format: 'csv',
      url: 'https://data.bodik.jp/dataset/f632f467-716c-46aa-8838-0d535f98b291/resource/96440e66-3061-43d6-adf3-ef1f24211d3a/download/440001oitacovid19datasummary.csv'
    },
    gov: {
      patients: 'http://www.pref.oita.jp/site/covid19-oita/covid19-pcr.html'
    },
    cities: {
      oitaCity: {
        gov: {
          patients: 'https://www.city.oita.oita.jp/o096/kenko/hoken/1137572759760.html'
        }
      }
    },
    source: 'https://data.bodik.jp/dataset/_covid19',
    dashboard: 'https://oita.stopcovid19.jp/en'
  },
  okayama: {
    patients: {
      format: 'csv',
      encoding: 'sjis',
      url: 'http://www.okayama-opendata.jp/ckan/dataset/e6b3c1d2-2f1f-4735-b36e-e45d36d94761/resource/c6503ebc-b2e9-414c-aae7-7374f4801e21/download/kansenshajouhou.csv',
    },
    tests: {
      format: 'csv',
      encoding: 'sjis',
      url: 'http://www.okayama-opendata.jp/ckan/dataset/e6b3c1d2-2f1f-4735-b36e-e45d36d94761/resource/60ecd874-0f71-4d9f-9a8a-936fad9c99bc/download/pcr.csv'
    },
    gov: {
      patients: 'https://www.pref.okayama.jp/page/645925.html'
    },
    source: 'http://www.okayama-opendata.jp/opendata/ga120PreAction.action?keyTitle=d9c4776db7f09fff161953a2aaf03b80a9abad48&datasetId=e6b3c1d2-2f1f-4735-b36e-e45d36d94761',
    dashboard: 'https://okayama.stopcovid19.jp/'
  },
  okinawa: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/Code-for-OKINAWA/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.okinawa.jp/site/hoken/chiikihoken/kekkaku/covid19_hasseijoukyou.html',
      summary: 'https://www.pref.okinawa.jp/site/hoken/chiikihoken/kekkaku/covid19_hasseijoukyou.html'
    },
    source: 'https://github.com/Code-for-OKINAWA/covid19/tree/development/data',
    dashboard: 'https://okinawa.stopcovid19.jp/'
  },
  osaka: {
    patients: {
      format: 'json', 
      url: 'https://raw.githubusercontent.com/codeforosaka/covid19/development/data/data.json',
      key: 'patients.data'

    },
    gov: {
      patients: 'http://www.pref.osaka.lg.jp/hodo/index.php?HST_TITLE1=%83R%83%8D%83i&SEARCH_NUM=10&searchFlg=%8C%9F%81@%8D%F5&site=fumin'
    },
    source: 'https://github.com/codeforosaka/covid19',
    dashboard: 'https://covid19-osaka.info/'
  },
  saga: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/codeforsaga/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.saga.lg.jp/kiji00373220/index.html'
    },
    source: 'https://github.com/codeforsaga/covid19/tree/development/data',
    dashboard: 'https://stopcovid19.code4saga.org/en'
  },
  saitama: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/codefortoda/covid19-saitama/development/data/data.json'
    },
    gov: {
      summary: 'https://www.pref.saitama.lg.jp/a0701/covid19/jokyo.html',
      patients: 'https://www.pref.saitama.lg.jp/kense/shiryo/nyu-su/2020/5gatsu/index.html',
    },
    source: 'https://opendata.pref.saitama.lg.jp/data/dataset/covid19-jokyo',
    dashboard: 'https://saitama.stopcovid19.jp/'
  },
  shiga: {
    gov: {
      patients: 'https://www.pref.shiga.lg.jp/ippan/kenkouiryouhukushi/yakuzi/310735.html'
    },
    source: 'https://github.com/shiga-pref-org/covid19',
    dashboard: 'https://stopcovid19.pref.shiga.jp/',
  },
  shimane: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/TaigaMikami/shimane-covid19/shimane/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.shiga.lg.jp/ippan/kenkouiryouhukushi/yakuzi/310735.html'
    },
    source: 'https://github.com/TaigaMikami/shimane-covid19/',
    dashboard: 'https://shimane-covid19.netlify.app/en'
  },
  shizuoka: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/hiroyuki-ichikawa/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/new_coronavirus_portal.html',
      summary: 'https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/new_coronavirus_portal.html',
    },
    source: 'https://github.com/hiroyuki-ichikawa/covid19',
    dashboard: 'https://stopcovid19.code4numazu.org/en',
    cities: {
      shizuokaCity: {
        gov: {
          patients: 'https://www.city.shizuoka.lg.jp/388_000101.html'
        },
        source: 'https://github.com/kazuomatz/covid19',
        dashboard: 'https://stopcovid19.city.shizuoka.lg.jp/'
      },
      hanamatsu: {
        patients: {
          url: 'https://opendata.pref.shizuoka.jp/dataset/8113/resource/44704/221309_hamamatsu_covid19_patients.csv'
        },
        source: 'https://opendata.pref.shizuoka.jp/dataset/8113.html',
        dashboard: 'https://stopcovid19-hamamatsu.netlify.app/en'
      },
    }
  },
  tochigi: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/covid19-tochigi/covid19/development/data/data.json'
    },
    gov: {
      patients: 'http://www.pref.tochigi.lg.jp/e04/welfare/hoken-eisei/kansen/hp/coronakensahasseijyoukyou.html',
      summary: 'http://www.pref.tochigi.lg.jp/e04/welfare/hoken-eisei/kansen/hp/coronakensahasseijyoukyou.html'
    },
    cities: {
      utsunomiya: {
        gov: {
          patients: 'https://www.city.utsunomiya.tochigi.jp/kurashi/kenko/kansensho/etc/1023506.html'
        }
      }
    },
    sheet: 'https://docs.google.com/spreadsheets/d/1aCIRyol3UncEtstWhT_Yw3I8mCbvpGQU5_HUKB_0JFA/edit#gid=0',
    source: 'https://github.com/covid19-tochigi/covid19',
    dashboard: 'https://covid19-tochigi.netlify.app/'
  },
  tokushima: {
    gov: {
      patients: 'https://www.pref.tokushima.lg.jp/ippannokata/kenko/kansensho/5034012#25'
    }
  },
  tottori: {
    gov: {
      patients: 'https://www.pref.tottori.lg.jp/corona-virus/'
    },
    dashboard: 'https://tottori-covid19.netlify.app/en'
  },
  toyama: {
    gov: {
      patients: 'http://www.pref.toyama.jp/cms_sec/1205/kj00021798.html'
    },
    cities: {
      toyamaCity: {
        gov: {
          patients: 'https://www.city.toyama.toyama.jp/fukushihokenbu/hokensho/hokenyoboka/shingatakorona_3.html'
        }
      }
    },
  },
  tokyo: {
    patients: { 
      format: 'csv',
      url: 'https://stopcovid19.metro.tokyo.lg.jp/data/130001_tokyo_covid19_patients.csv'
    },
    gov: {
      patients: 'https://www.fukushihoken.metro.tokyo.lg.jp/hodo/index.html'
    },
    source: 'https://github.com/tokyo-metropolitan-gov/covid19',
    dashboard: 'https://stopcovid19.metro.tokyo.lg.jp/',
    dashboards: [
      'https://covid19tokyo.live/'
    ]
  },
  wakayama: {
    gov: {
      patients: 'https://www.pref.wakayama.lg.jp/prefg/041200/d00203387.html'
    },
    dashboard: 'https://stopcovid19.wakayama.jp/'
  },
  yamagata: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/yamaserif/covid19/development/data/data.json',
    },
    gov: {
      patients: 'http://www.pref.yamagata.jp/ou/bosai/020072/kochibou/coronavirus/coronavirus.html'
    },
    cities: {
      yonezawa: {
        gov: { patients: 'http://www.city.yonezawa.yamagata.jp/item/8355.html#itemid8355' }
      }
    },
    source: 'https://github.com/yamaserif/covid19',
    dashboard: 'https://stopcovid19-yamagata.netlify.app/'
  },
  yamaguchi: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/nishidayoshikatsu/covid19-yamaguchi/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202004240002.html',
      summary: 'https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202004240002.html'
    },
    source: 'https://github.com/nishidayoshikatsu/covid19-yamaguchi/'
  },
  yamanashi: {
    patients: {
      format: 'json',
      url: 'https://raw.githubusercontent.com/covid19-yamanashi/covid19/development/data/data.json'
    },
    gov: {
      patients: 'https://www.pref.yamanashi.jp/koucho/coronavirus/info_coronavirus_prevention.html'
    },
    source: 'https://github.com/covid19-yamanashi/covid19',
    dashboard: 'https://stopcovid19.yamanashi.dev/'
  }
}

exports.sources = sources