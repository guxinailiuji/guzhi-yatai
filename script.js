document.addEventListener('DOMContentLoaded', function() {
    // Country data
    const countryData = {
        japan: {
            name: "日本",
            theme: "japan-theme",
            flag: flagsSVG.japan,
            indexOverview: {
                name: "日经225指数 / 东证指数 (TOPIX)",
                components: "日经225: 225支 / 东证指数: 2100+",
                calculation: "日经225: 价格加权 / 东证指数: 市值加权",
                baseDate: "日经225: 1949年5月16日 / 东证指数: 1968年1月4日"
            },
            industryDistribution: [
                { name: "电器/技术", percentage: 24.8, color: "#E3170A" },
                { name: "金融服务", percentage: 19.2, color: "#A9F8FB" },
                { name: "消费品", percentage: 14.6, color: "#2E3192" },
                { name: "工业制造", percentage: 13.5, color: "#FFFFFF" },
                { name: "通信服务", percentage: 8.7, color: "#04B46D" },
                { name: "医疗健康", percentage: 7.6, color: "#775DE0" },
                { name: "原材料", percentage: 6.8, color: "#F47A38" },
                { name: "其他", percentage: 4.8, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "日经225指数",
                    description: "由《日本经济新闻》社编制的，根据在东京证券交易所主板上市的225家公司的股票计算得出的修正平均股价指数。该指数的选样主要基于流动性考虑，并兼顾行业板块分布，每年调整一次。日经225指数的编制方法与道琼斯工业平均指数相似，当前其成分股的市值覆盖了东京证券交易所主板约2/3的市值。",
                    composition: "日经225指数由东京证券交易所Prime市场上市的225只股票组成。这些股票是基于流动性和行业分布选择的，指数采用价格加权方法计算，这意味着股价较高的公司对指数的影响较大。",
                    components: [
                        { code: "7203", name: "丰田汽车 (Toyota Motor)" },
                        { code: "9983", name: "ファーストリテイリング (Fast Retailing)" },
                        { code: "6758", name: "索尼集团 (Sony Group)" },
                        { code: "8035", name: "东京电子 (Tokyo Electron)" },
                        { code: "6861", name: "基恩斯 (Keyence)" },
                        { code: "9433", name: "KDDI" },
                        { code: "4568", name: "第一三共 (Daiichi Sankyo)" },
                        { code: "6367", name: "大金工业 (Daikin Industries)" },
                        { code: "9984", name: "软银集团 (SoftBank Group)" },
                        { code: "8058", name: "三菱商事 (Mitsubishi Corporation)" },
                        { code: "8306", name: "三菱UFJ金融集团 (MUFG)" },
                        { code: "4519", name: "中外制药 (Chugai Pharmaceutical)" },
                        { code: "6501", name: "日立制作所 (Hitachi)" },
                        { code: "6098", name: "瑞可利 (Recruit Holdings)" }
                    ]
                },
                {
                    name: "东证指数 (TOPIX)",
                    description: "是以在东京证券交易所主板上市的所有日本公司（所有国内普通股）为样本股的总市值加权型股价指数。截至2018年11月，东证指数包含2116只成分股，性质上类似于中国A股市场的中证全指，全面反映了日本股票市场的表现。",
                    composition: "东证指数追踪在东京证券交易所Prime市场上市的所有股票，成分股数量超过2100只，总市值覆盖率达到约95%。该指数采用市值加权法计算，行业划分包括电器、服务、机械等20多个行业，其中电器行业权重最大，运输设备行业紧随其后。",
                    components: [
                        { code: "7203", name: "丰田汽车 (Toyota Motor)" },
                        { code: "6758", name: "索尼集团 (Sony Group)" },
                        { code: "8306", name: "三菱UFJ金融集团 (MUFG)" },
                        { code: "8316", name: "三井住友金融集团" },
                        { code: "9984", name: "软银集团 (SoftBank Group)" },
                        { code: "8411", name: "瑞穗金融集团 (Mizuho Financial Group)" },
                        { code: "7267", name: "本田汽车 (Honda Motor)" },
                        { code: "9432", name: "日本电信电话" },
                        { code: "9433", name: "KDDI" },
                        { code: "6861", name: "基恩斯 (Keyence)" }
                    ]
                }
            ]
        },
        korea: {
            name: "韩国",
            theme: "korea-theme",
            flag: flagsSVG.korea,
            indexOverview: {
                name: "韩国综合股价指数 (KOSPI)",
                components: "780+",
                calculation: "市值加权",
                baseDate: "1980年1月4日"
            },
            industryDistribution: [
                { name: "信息技术", percentage: 32.4, color: "#0047A0" },
                { name: "金融", percentage: 17.6, color: "#C60C30" },
                { name: "消费品", percentage: 12.8, color: "#FFFFFF" },
                { name: "工业", percentage: 12.2, color: "#000000" },
                { name: "医疗健康", percentage: 8.9, color: "#708090" },
                { name: "材料", percentage: 7.5, color: "#F5DEB3" },
                { name: "通信服务", percentage: 5.2, color: "#CD7F32" },
                { name: "其他", percentage: 3.4, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "韩国综合股价指数 (KOSPI)",
                    description: "KOSPI是韩国交易所的股票指数，用以衡量韩国股市的整体表现。该指数由在交易所内交易的所有股票的价格计算得出，以1980年1月4日为基准日，当日开市价为100点。",
                    composition: "KOSPI指数拥有超过780个成分股，KOSPI 200指数则是由在主板上市的、能够代表市场和行业且具有丰富流动性的200支股票组成。",
                    components: [
                        { code: "005930", name: "三星电子 (Samsung Electronics)" },
                        { code: "000660", name: "SK海力士 (SK Hynix)" },
                        { code: "207940", name: "三星生物制剂 (Samsung Biologics)" },
                        { code: "373220", name: "LG新能源 (LG Energy Solution)" },
                        { code: "005380", name: "现代汽车 (Hyundai Motor)" },
                        { code: "068270", name: "思尔铎 (Celltrion)" },
                        { code: "000270", name: "起亚株式会社 (KIA Corporation)" },
                        { code: "012450", name: "韩华航空宇宙 (Hanwha Aerospace)" },
                        { code: "035420", name: "NAVER" },
                        { code: "105560", name: "KB金融集团 (KB Financial Group)" },
                        { code: "051910", name: "LG化学 (LG Chem)" },
                        { code: "035720", name: "Kakao" },
                        { code: "055550", name: "新韩金融集团 (Shinhan Financial Group)" },
                        { code: "005490", name: "浦项制铁 (POSCO Holdings)" }
                    ]
                }
            ]
        },
        taiwan: {
            name: "台湾",
            theme: "taiwan-theme",
            flag: flagsSVG.taiwan,
            indexOverview: {
                name: "台湾证券交易所发行量加权股价指数",
                components: "全部上市公司",
                calculation: "市值加权",
                baseDate: "1966年"
            },
            industryDistribution: [
                { name: "半导体", percentage: 38.6, color: "#FE0000" },
                { name: "电子零组件", percentage: 14.2, color: "#000095" },
                { name: "金融保险", percentage: 12.8, color: "#FFFFFF" },
                { name: "化学工业", percentage: 8.4, color: "#75BFE0" },
                { name: "电脑及周边", percentage: 7.5, color: "#006AA7" },
                { name: "通信网络", percentage: 6.3, color: "#FECC00" },
                { name: "生技医疗", percentage: 5.8, color: "#009900" },
                { name: "其他", percentage: 6.4, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "台湾加权指数",
                    description: "台湾证券交易所发行量加权股价指数是台湾股市的基准指数，追踪在台湾证券交易所 (TWSE) 上市的所有股票，并按市值加权计算。由于台湾半导体产业在全球的重要性，该指数也备受国际投资者的关注。",
                    composition: "该指数的成分股是所有在台湾证券交易所上市的股票。成分股会定期调整，成分股的权重是基于其市值的，市值较高的股票在指数中占有较大的比重。",
                    components: [
                        { code: "2330", name: "台积电 (Taiwan Semiconductor)" },
                        { code: "2454", name: "联发科 (MediaTek)" },
                        { code: "2317", name: "鸿海 (Hon Hai Precision)" },
                        { code: "2881", name: "富邦金 (Fubon Financial)" },
                        { code: "2412", name: "中华电 (Chunghwa Telecom)" },
                        { code: "2308", name: "台达电 (Delta Electronics)" },
                        { code: "2882", name: "国泰金 (Cathay Financial)" },
                        { code: "2382", name: "广达 (Quanta Computer)" },
                        { code: "2891", name: "中信金 (CTBC Financial)" },
                        { code: "3711", name: "日月光投控 (ASE Technology)" },
                        { code: "2311", name: "日月光半导体 (ASE)" },
                        { code: "1303", name: "南亚 (Nan Ya Plastics)" },
                        { code: "1301", name: "台塑 (Formosa Plastics)" },
                        { code: "2002", name: "中钢 (China Steel)" }
                    ]
                }
            ]
        },
        singapore: {
            name: "新加坡",
            theme: "singapore-theme",
            flag: flagsSVG.singapore,
            indexOverview: {
                name: "海峡时报指数 (STI)",
                components: "30",
                calculation: "市值加权",
                baseDate: "1966年1月4日"
            },
            industryDistribution: [
                { name: "金融", percentage: 42.6, color: "#EF3340" },
                { name: "房地产", percentage: 22.3, color: "#FFFFFF" },
                { name: "工业", percentage: 13.8, color: "#000000" },
                { name: "电信服务", percentage: 7.5, color: "#00B9F1" },
                { name: "消费品", percentage: 6.4, color: "#00953B" },
                { name: "医疗保健", percentage: 3.8, color: "#FFD100" },
                { name: "交通物流", percentage: 2.2, color: "#FFA500" },
                { name: "其他", percentage: 1.4, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "海峡时报指数 (STI)",
                    description: "海峡时报指数是新加坡股市的主要基准指数，由SPH媒体信托、新加坡交易所(SGX)和富时罗素共同计算和管理。该指数追踪在新加坡交易所上市的30家最大和最活跃交易的公司的表现。",
                    composition: "STI由富时海峡时报全股指数中的前30家符合条件的公司组成。这些成分股是基于市值和在新加坡交易所的交易活动选择的。该指数采用资本加权计算，这意味着市值较大的公司对指数的影响较大。",
                    components: [
                        { code: "A17U", name: "Ascendas REIT" },
                        { code: "9CI", name: "凯德集团 (CapitaLand Investment)" },
                        { code: "C31", name: "凯德商用信托 (CapitaLand Integrated Commercial Trust)" },
                        { code: "C38U", name: "凯德新加坡信托 (CapitaLand Ascendas REIT)" },
                        { code: "C09", name: "城市发展 (City Developments)" },
                        { code: "C52", name: "ComfortDelGro Corporation" },
                        { code: "D01", name: "星展银行 (DBS Group Holdings)" },
                        { code: "F34", name: "丰益国际 (Wilmar International)" },
                        { code: "G13", name: "云顶新加坡 (Genting Singapore)" },
                        { code: "H78", name: "香港置地 (Hongkong Land)" },
                        { code: "C07", name: "怡和合发 (Jardine Cycle & Carriage)" },
                        { code: "J36", name: "怡和洋行 (Jardine Matheson Holdings)" },
                        { code: "BN4", name: "吉宝企业 (Keppel Corporation)" },
                        { code: "ME8U", name: "丰树泛亚商业信托 (Mapletree Pan Asia Commercial Trust)" }
                    ]
                }
            ]
        },
        malaysia: {
            name: "马来西亚",
            theme: "malaysia-theme",
            flag: flagsSVG.malaysia,
            indexOverview: {
                name: "富时马来西亚吉隆坡综合指数 (KLCI)",
                components: "30",
                calculation: "市值加权",
                baseDate: "1986年"
            },
            industryDistribution: [
                { name: "银行与金融", percentage: 42.4, color: "#010066" },
                { name: "消费品", percentage: 14.6, color: "#CC0001" },
                { name: "能源石油", percentage: 12.8, color: "#FFFFFF" },
                { name: "种植业", percentage: 10.5, color: "#FFCC00" },
                { name: "电信媒体", percentage: 7.8, color: "#000000" },
                { name: "工业制造", percentage: 5.6, color: "#BF0A30" },
                { name: "医疗保健", percentage: 3.8, color: "#009900" },
                { name: "其他", percentage: 2.5, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "富时马来西亚吉隆坡综合指数 (KLCI)",
                    description: "富时马来西亚吉隆坡综合指数是追踪马来西亚交易所市值最大的30家公司的指标。该指数被广泛用作衡量马来西亚股市整体表现的标准，由富时罗素和马来西亚交易所共同编制。",
                    composition: "该指数由30家市值最大的马来西亚上市公司组成，这些公司来自金融、能源、种植业和消费品等关键领域。银行股在KLCI中占据显著地位，占比约42.36%。前十大成分股占指数的66.45%，显示出权重股对指数有相当大的影响力。",
                    components: [
                        { code: "1155", name: "马来亚银行 (Maybank)" },
                        { code: "1295", name: "大众银行 (Public Bank)" },
                        { code: "1023", name: "联昌国际银行 (CIMB Bank)" },
                        { code: "5347", name: "国家能源 (Tenaga Nasional)" },
                        { code: "4715", name: "雀巢马来西亚 (Nestle Malaysia)" },
                        { code: "6033", name: "国油气体 (Petronas Gas)" },
                        { code: "1961", name: "IOI集团 (IOI Corporation)" },
                        { code: "5183", name: "吉隆坡吉普控股 (Petronas Dagangan)" },
                        { code: "3816", name: "MISC Berhad" },
                        { code: "5225", name: "IHH Healthcare" },
                        { code: "4863", name: "Telekom Malaysia" },
                        { code: "6947", name: "迪吉通讯 (DiGi.Com)" },
                        { code: "5819", name: "金务大 (GAMUDA)" },
                        { code: "4065", name: "99 Speed Mart Retail Holdings" }
                    ]
                }
            ]
        },
        india: {
            name: "印度",
            theme: "india-theme",
            flag: flagsSVG.india,
            indexOverview: {
                name: "Nifty 50 和 BSE SENSEX",
                components: "Nifty 50: 50 / BSE SENSEX: 30",
                calculation: "市值加权",
                baseDate: "Nifty 50: 1995年 / BSE SENSEX: 1979年"
            },
            industryDistribution: [
                { name: "金融服务", percentage: 36.2, color: "#FF9933" },
                { name: "信息技术", percentage: 14.5, color: "#FFFFFF" },
                { name: "石油与天然气", percentage: 12.8, color: "#138808" },
                { name: "消费品", percentage: 11.4, color: "#000080" },
                { name: "汽车", percentage: 7.8, color: "#A52A2A" },
                { name: "制药", percentage: 6.5, color: "#800080" },
                { name: "电信", percentage: 5.6, color: "#FFC0CB" },
                { name: "其他", percentage: 5.2, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "Nifty 50",
                    description: "印度Nifty 50指数是印度国家证券交易所(NSE)的一个主要股指。该指数创立于1996年，旨在衡量印度股市和经济的走向，也是亚洲地区最受关注的股指之一。Nifty 50是一个市值加权指数，截至2020年5月，金融业在该指数中市值占比最高，达到36.20%。",
                    composition: "Nifty 50指数由50家印度最具代表性的上市公司组成，涵盖金融、能源、汽车、传媒、电信等14个行业。NSE指数有限公司每年1月31日和7月31日会对该指数进行审核，不符合标准的成分股会被移除，符合标准的非成分股会被纳入。",
                    components: [
                        { code: "RELIANCE", name: "信实工业 (Reliance Industries)" },
                        { code: "HDFCBANK", name: "HDFC银行 (HDFC Bank)" },
                        { code: "ICICIBANK", name: "印度工业信贷投资银行 (ICICI Bank)" },
                        { code: "INFY", name: "印孚瑟斯 (Infosys)" },
                        { code: "SBIN", name: "印度国家银行 (State Bank of India)" },
                        { code: "TCS", name: "塔塔咨询服务 (Tata Consultancy Services)" },
                        { code: "KOTAKBANK", name: "科塔克银行 (Kotak Mahindra Bank)" },
                        { code: "HINDUNILVR", name: "印度联合利华 (Hindustan Unilever)" },
                        { code: "BAJFINANCE", name: "巴贾金融 (Bajaj Finance)" },
                        { code: "ADANIENT", name: "阿达尼企业 (Adani Enterprises)" },
                        { code: "ASIANPAINT", name: "亚洲涂料 (Asian Paints)" },
                        { code: "AXISBANK", name: "Axis银行 (Axis Bank)" },
                        { code: "BAJAJ-AUTO", name: "巴贾汽车 (Bajaj Auto)" },
                        { code: "BHARTIARTL", name: "巴帝电信 (Bharti Airtel)" }
                    ]
                },
                {
                    name: "BSE SENSEX",
                    description: "BSE SENSEX是孟买证券交易所(BSE)的基准指数，由30家最大的和交易最活跃的印度公司组成。这些公司来自不同的行业，并在印度经济中占有重要地位。",
                    composition: "BSE SENSEX指数由30家公司组成，这些公司在孟买证券交易所上市，并根据市值、交易量和行业代表性等因素选择。该指数采用自由流通市值加权方法，并定期进行成分股调整。",
                    components: [
                        { code: "RELIANCE", name: "信实工业 (Reliance Industries)" },
                        { code: "HDFCBANK", name: "HDFC银行 (HDFC Bank)" },
                        { code: "ICICIBANK", name: "印度工业信贷投资银行 (ICICI Bank)" },
                        { code: "INFY", name: "印孚瑟斯 (Infosys)" },
                        { code: "SBIN", name: "印度国家银行 (State Bank of India)" },
                        { code: "TCS", name: "塔塔咨询服务 (Tata Consultancy Services)" },
                        { code: "LT", name: "拉森特博洛 (Larsen & Toubro)" },
                        { code: "HINDUNILVR", name: "印度联合利华 (Hindustan Unilever)" },
                        { code: "KOTAKBANK", name: "科塔克银行 (Kotak Mahindra Bank)" },
                        { code: "ITC", name: "ITC有限公司" },
                        { code: "M&M", name: "马辛德拉 (Mahindra & Mahindra)" },
                        { code: "MARUTI", name: "玛鲁蒂铃木 (Maruti Suzuki)" },
                        { code: "SUNPHARMA", name: "太阳制药 (Sun Pharmaceutical)" },
                        { code: "TATASTEEL", name: "塔塔钢铁 (Tata Steel)" }
                    ]
                }
            ]
        },
        indonesia: {
            name: "印度尼西亚",
            theme: "indonesia-theme",
            flag: flagsSVG.indonesia,
            indexOverview: {
                name: "雅加达综合指数 (JCI)",
                components: "全部上市公司",
                calculation: "市值加权",
                baseDate: "1982年8月10日"
            },
            industryDistribution: [
                { name: "金融", percentage: 32.4, color: "#FF0000" },
                { name: "消费品", percentage: 18.2, color: "#FFFFFF" },
                { name: "基础设施", percentage: 15.6, color: "#B22222" },
                { name: "工业产品", percentage: 10.8, color: "#8B0000" },
                { name: "材料", percentage: 8.5, color: "#800000" },
                { name: "房地产", percentage: 6.2, color: "#A52A2A" },
                { name: "能源", percentage: 4.8, color: "#C41E3A" },
                { name: "其他", percentage: 3.5, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "印尼综合指数 (JCI)",
                    description: "印尼综合指数(Jakarta Composite Index, JCI)是衡量印度尼西亚证券交易所(IDX)上市公司股价表现的指标。该指数成立于1982年8月10日，以市值加权计算印尼证券交易所上市的股票。",
                    composition: "印尼综合指数包括所有在印度尼西亚证券交易所上市的符合条件的公司。标普印度尼西亚BMI指数是标普全球BMI的国家分类指数，包括所有符合条件并在印度尼西亚注册的公司。",
                    components: [
                        { code: "BBCA", name: "印尼中亚银行 (Bank Central Asia)" },
                        { code: "BBRI", name: "印尼人民银行 (Bank Rakyat Indonesia)" },
                        { code: "BMRI", name: "印尼曼迪利银行 (Bank Mandiri)" },
                        { code: "TLKM", name: "印尼电信 (Telkom Indonesia)" },
                        { code: "ASII", name: "阿斯特拉国际 (Astra International)" },
                        { code: "BBNI", name: "印尼国家银行 (Bank Negara Indonesia)" },
                        { code: "UNVR", name: "联合利华印尼 (Unilever Indonesia)" },
                        { code: "BNGK", name: "印尼国家银行 (Bank Negara Indonesia)" },
                        { code: "PTBA", name: "布基特阿萨姆煤矿 (Bukit Asam)" },
                        { code: "HMSP", name: "Hanjaya Mandala Sampoerna" },
                        { code: "ADMF", name: "Adira Dinamika Multi Finance" },
                        { code: "ADHI", name: "Adhi Karya" },
                        { code: "ABBA", name: "Mahaka Media" },
                        { code: "AHAP", name: "Asuransi Harta Aman Pratama" }
                    ]
                }
            ]
        },
        thailand: {
            name: "泰国",
            theme: "thailand-theme",
            flag: flagsSVG.thailand,
            indexOverview: {
                name: "泰国SET指数",
                components: "全部上市公司",
                calculation: "市值加权",
                baseDate: "1975年4月30日"
            },
            industryDistribution: [
                { name: "能源与公用事业", percentage: 24.6, color: "#FF0000" },
                { name: "金融", percentage: 19.8, color: "#FFFFFF" },
                { name: "商业", percentage: 15.2, color: "#0039A6" },
                { name: "工业制品", percentage: 10.5, color: "#241D4F" },
                { name: "房地产建筑", percentage: 9.8, color: "#00247D" },
                { name: "服务业", percentage: 7.5, color: "#00205B" },
                { name: "农业食品", percentage: 6.2, color: "#C8102E" },
                { name: "其他", percentage: 6.4, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "泰国SET指数",
                    description: "泰国SET指数是泰国证券交易所（Stock Exchange of Thailand）的主要股票指数，反映了泰国股市的整体表现。该指数跟踪在泰国证券交易所上市的所有符合特定标准的股票表现。",
                    composition: "SET指数的成分股包括在泰国证券交易所上市的所有符合特定标准的股票。SET50指数是SET指数的一个子集，由市值最大的50家公司组成，在某种程度上代表了SET指数的蓝筹股。",
                    components: [
                        { code: "ADVANC", name: "亿旺资讯 (Advanced Info Service)" },
                        { code: "AOT", name: "泰国机场公司 (Airports of Thailand)" },
                        { code: "BBL", name: "盘古银行 (Bangkok Bank)" },
                        { code: "BANPU", name: "盘谷能源 (Banpu)" },
                        { code: "BJC", name: "Berli Jucker" },
                        { code: "BDMS", name: "曼谷杜斯特医疗 (Bangkok Dusit Medical)" },
                        { code: "BTS", name: "BTS集团控股 (BTS Group Holdings)" },
                        { code: "BH", name: "曼谷医院 (Bangkok Hospital)" },
                        { code: "CPN", name: "尚泰中心 (Central Pattana)" },
                        { code: "CPF", name: "卜蜂集团 (Charoen Pokphand Foods)" },
                        { code: "CPALL", name: "CP全家 (CP All)" },
                        { code: "DELTA", name: "台达电子泰国 (Delta Electronics Thailand)" },
                        { code: "EGCO", name: "泰国发电公司 (Electricity Generating)" },
                        { code: "HMPRO", name: "霍姆宝 (Home Product Center)" }
                    ]
                }
            ]
        },
        vietnam: {
            name: "越南",
            theme: "vietnam-theme",
            flag: flagsSVG.vietnam,
            indexOverview: {
                name: "越南VN指数",
                components: "全部上市公司，VN30为30家",
                calculation: "市值加权",
                baseDate: "2000年，基准点100"
            },
            industryDistribution: [
                { name: "银行", percentage: 28.4, color: "#DA251D" },
                { name: "房地产", percentage: 22.6, color: "#FFFF00" },
                { name: "消费品", percentage: 15.8, color: "#BF0A30" },
                { name: "钢铁", percentage: 8.5, color: "#CE1126" },
                { name: "能源", percentage: 7.4, color: "#B22222" },
                { name: "电信", percentage: 6.8, color: "#8B0000" },
                { name: "建筑材料", percentage: 5.2, color: "#FF4500" },
                { name: "其他", percentage: 5.3, color: "#CCCCCC" }
            ],
            indices: [
                {
                    name: "越南VN指数",
                    description: "VN指数是越南股市的基准股票指数。胡志明证券交易所(HoSE)是越南最大的证券交易所，成立于1998年。VN指数于2000年推出，基准值为100点，是越南股市表现的主要指标。",
                    composition: "VN指数包括在胡志明证券交易所上市的所有股票。VN30指数包括胡志明证券交易所市值和流动性最大的30家公司，每六个月审核一次，以确保它反映越南市场中最具代表性的公司。",
                    components: [
                        { code: "ACB", name: "亚洲商业银行 (Asia Commercial Bank)" },
                        { code: "SHB", name: "西贡河内商业银行 (Sai Gon Ha Noi Bank)" },
                        { code: "BIDV", name: "越南投资发展银行 (Vietnam Investment and Development Bank)" },
                        { code: "BVH", name: "越南保险集团 (BaoViet Holdings)" },
                        { code: "VCB", name: "越南外贸银行 (Vietcombank)" },
                        { code: "FPT", name: "FPT集团 (FPT Corp)" },
                        { code: "GAS", name: "越南燃气 (PetroVietnam Gas)" },
                        { code: "HDB", name: "胡志明开发银行 (Ho Chi Minh City Development Bank)" },
                        { code: "HPG", name: "和发集团 (Hoa Phat Group)" },
                        { code: "KDH", name: "Khang Dien House" },
                        { code: "MBB", name: "军队商业股份银行 (Military Commercial Bank)" },
                        { code: "MSN", name: "马山集团 (Masan Group)" },
                        { code: "PLX", name: "越南石油 (Petrolimex)" },
                        { code: "PNJ", name: "Phu Nhuan Jewelry" }
                    ]
                }
            ]
        }
    };

    // DOM Elements
    const countriesNavContainer = document.getElementById('countries-nav');
    const allCountriesContentContainer = document.getElementById('all-countries-content');

    // Function to convert hex color to RGB
    function hexToRgb(hex) {
        // Remove # if present
        hex = hex.replace('#', '');
        
        // Convert 3-digit hex to 6-digits
        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        
        // Parse the hex values
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        
        return { r, g, b };
    }

    // Function to generate industry chart for a country
    function generateIndustryChart(countryCode, chartId) {
        const data = countryData[countryCode];
        const chartCanvas = document.getElementById(chartId);
        
        if (!chartCanvas) return;
        
        // Get industry data
        const industries = data.industryDistribution.map(item => item.name);
        const percentages = data.industryDistribution.map(item => item.percentage);
        const colors = data.industryDistribution.map(item => item.color);
        
        // Create chart
        new Chart(chartCanvas, {
            type: 'doughnut',
            data: {
                labels: industries,
                datasets: [{
                    data: percentages,
                    backgroundColor: colors,
                    borderColor: colors.map(color => {
                        // For white color, add a light gray border
                        return color === '#FFFFFF' ? '#DDDDDD' : color;
                    }),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                }
            }
        });
        
        // Generate legend with percentage bars
        const legendContainer = document.getElementById(`industry-legend-${countryCode}`);
        if (!legendContainer) return;
        
        let legendHTML = '';
        
        data.industryDistribution.forEach((industry, index) => {
            const isLight = industry.color === '#FFFFFF' || industry.color === '#FFFF00' || industry.color === '#A9F8FB';
            
            legendHTML += `
                <div class="industry-legend-item flex flex-col" data-index="${index}">
                    <div class="flex items-center">
                        <div class="industry-color" style="background-color: ${industry.color}"></div>
                        <span class="font-medium">${industry.name}</span>
                        <span class="ml-auto font-semibold">${industry.percentage}%</span>
                    </div>
                    <div class="industry-percentage-bar-container mt-1">
                        <div class="industry-percentage-bar" style="width: ${industry.percentage}%; background-color: ${industry.color}; ${isLight ? 'border: 1px solid #DDDDDD;' : ''}"></div>
                    </div>
                </div>
            `;
        });
        
        legendContainer.innerHTML = legendHTML;
        
        // Add event listeners for legend items to highlight chart sectors
        const legendItems = legendContainer.querySelectorAll('.industry-legend-item');
        
        legendItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                const index = parseInt(this.dataset.index);
                
                // Add active class to the legend item
                this.classList.add('active');
                
                // Add pulsing effect to the bar
                const bar = this.querySelector('.industry-percentage-bar');
                bar.classList.add('bar-pulsing');
                
                // Get the RGB values for the industry color to use in the pulsing animation
                const rgb = hexToRgb(data.industryDistribution[index].color);
                document.documentElement.style.setProperty('--pulse-color-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
                
                // Highlight the corresponding chart sector
                const chartInstance = Chart.getChart(chartId);
                
                if (chartInstance) {
                    // Save current hoverBorderWidth values
                    if (!chartInstance._savedBorderWidths) {
                        chartInstance._savedBorderWidths = [...chartInstance.data.datasets[0].hoverBorderWidth || []];
                    }
                    
                    // Prepare hoverBorderWidth array with higher value for the hovered sector
                    const hoverBorderWidths = Array(chartInstance.data.datasets[0].data.length).fill(1);
                    hoverBorderWidths[index] = 6;
                    
                    // Update the chart
                    chartInstance.data.datasets[0].hoverBorderWidth = hoverBorderWidths;
                    chartInstance.update();
                }
            });
            
            item.addEventListener('mouseleave', function() {
                const index = parseInt(this.dataset.index);
                
                // Remove active class from the legend item
                this.classList.remove('active');
                
                // Remove pulsing effect from the bar
                const bar = this.querySelector('.industry-percentage-bar');
                bar.classList.remove('bar-pulsing');
                
                // Restore the chart to normal
                const chartInstance = Chart.getChart(chartId);
                
                if (chartInstance && chartInstance._savedBorderWidths) {
                    // Restore original hoverBorderWidth values
                    chartInstance.data.datasets[0].hoverBorderWidth = chartInstance._savedBorderWidths;
                    chartInstance.update();
                }
            });
        });
    }

    // Generate navigation menu for all countries
    function generateCountriesNav() {
        let html = '';
        
        // Get all country codes
        const countries = Object.keys(countryData);
        
        // Generate navigation links
        html += '<div class="flex flex-wrap gap-2">';
        
        countries.forEach(countryCode => {
            const data = countryData[countryCode];
            
            html += `
                <a href="#${countryCode}" class="country-nav-link ${data.theme} flex items-center px-3 py-1 rounded-md text-sm font-medium hover:opacity-100 transition-all">
                    <div class="w-4 h-4 mr-1 flex-shrink-0 overflow-hidden rounded-full">
                        ${data.flag}
                    </div>
                    <span>${data.name}</span>
                </a>
            `;
        });
        
        html += '</div>';
        
        // Update the navigation container
        countriesNavContainer.innerHTML = html;
    }

    // Generate content for all countries
    function generateAllCountriesContent() {
        let html = '';
        
        // Get all country codes
        const countries = Object.keys(countryData);
        
        // Generate content for each country
        countries.forEach(countryCode => {
            const data = countryData[countryCode];
            
            html += `
                <section id="${countryCode}" class="country-section mt-16 mb-24 pt-6 ${data.theme}">
                    <div class="flex items-center mb-10">
                        <div class="country-flag-container mr-4">
                            ${data.flag}
                        </div>
                        <h2 class="text-3xl font-bold theme-accent">${data.name}</h2>
                    </div>
                    
                    <!-- 亚洲主要市场概览 - 国家卡片 -->
                    <div class="mb-8">
                        <div class="country-overview-card bg-white rounded-lg shadow-sm p-5">
                            <h3 class="text-xl font-semibold mb-4 theme-header">市场概览</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="border-l-2 pl-3" style="border-color: var(--accent-color);">
                                    <p class="text-gray-500 mb-1 text-sm">主要指数</p>
                                    <p class="font-medium">${data.indexOverview.name}</p>
                                </div>
                                <div class="border-l-2 pl-3" style="border-color: var(--accent-color);">
                                    <p class="text-gray-500 mb-1 text-sm">成分股数量</p>
                                    <p class="font-medium">${data.indexOverview.components}</p>
                                </div>
                                <div class="border-l-2 pl-3" style="border-color: var(--accent-color);">
                                    <p class="text-gray-500 mb-1 text-sm">计算方法</p>
                                    <p class="font-medium">${data.indexOverview.calculation}</p>
                                </div>
                                <div class="border-l-2 pl-3" style="border-color: var(--accent-color);">
                                    <p class="text-gray-500 mb-1 text-sm">基准日</p>
                                    <p class="font-medium">${data.indexOverview.baseDate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg shadow-sm p-6 mb-8 industry-chart-container">
                        <h3 class="text-lg font-medium mb-4 theme-header">行业分布</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="h-80">
                                <canvas id="industry-chart-${countryCode}"></canvas>
                            </div>
                            <div id="industry-legend-${countryCode}" class="industry-legend space-y-2"></div>
                        </div>
                    </div>
            `;
            
            // Generate content for each index
            data.indices.forEach((index, idx) => {
                html += `
                    <div class="mb-12">
                        <h3 class="text-2xl font-semibold mb-6 theme-header">${index.name}</h3>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <div class="theme-section p-6 shadow-sm">
                                <h4 class="text-lg font-medium mb-3">指数简介</h4>
                                <p class="text-gray-700">${index.description}</p>
                            </div>
                            
                            <div class="theme-section p-6 shadow-sm">
                                <h4 class="text-lg font-medium mb-3">成分构成</h4>
                                <p class="text-gray-700">${index.composition}</p>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-medium mb-4">主要成分股</h4>
                            <div class="theme-section component-list-container p-6 shadow-sm">
                                <table class="min-w-full">
                                    <thead>
                                        <tr class="border-b border-gray-200">
                                            <th class="text-left py-3 px-4 font-medium text-sm text-gray-600">股票代码</th>
                                            <th class="text-left py-3 px-4 font-medium text-sm text-gray-600">公司名称</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                `;
                
                // Add each component stock
                index.components.forEach(component => {
                    html += `
                        <tr class="border-b border-gray-100 hover:bg-gray-50">
                            <td class="py-3 px-4 font-geist-mono">${component.code}</td>
                            <td class="py-3 px-4">${component.name}</td>
                        </tr>
                    `;
                });
                
                html += `
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
                
                // Add a separator between indices except for the last one
                if (idx < data.indices.length - 1) {
                    html += `<hr class="my-10 border-t border-gray-200">`;
                }
            });
            
            html += `
                </section>
            `;
            
            // Add a more visible separator between countries
            if (countryCode !== countries[countries.length - 1]) {
                html += `
                    <div class="my-16 flex items-center justify-center">
                        <div class="w-16 border-t-2 border-gray-300 mx-4"></div>
                        <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div class="w-16 border-t-2 border-gray-300 mx-4"></div>
                    </div>
                `;
            }
        });
        
        // Update the content container
        allCountriesContentContainer.innerHTML = html;
        
        // Initialize all industry charts
        countries.forEach(countryCode => {
            generateIndustryChart(countryCode, `industry-chart-${countryCode}`);
        });
    }

    // Add smooth scrolling to anchor links
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Initialize the page
    function initializePage() {
        generateCountriesNav();
        generateAllCountriesContent();
        setupSmoothScrolling();
    }

    // Start the application
    initializePage();
});
