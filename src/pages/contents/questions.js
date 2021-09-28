const questions = [
    {
        'question': '당신의 성별은?',
        'answers': [
            {
                text: '남자',
                score: 3
            },
            {
                text: '여자',
                score: 7
            }
        ],
        'weight': 0.7
    },
    {
        'question': '당신의 나이대를 입력해주세요',
        'answers': [
            {
                text: '10~20',
                score: 1
            },
            {
                text: '20~30',
                score: 2
            },
            {
                text: '30~40',
                score: 4
            },
            
        ],
        'weight': 0.3
    },
    {
        'question': '담배를 핀다? 안핀다?',
        'answers': [
            {
                text: '핀다',
                score: 6
            },
            {
                text: '안핀다',
                score: 4
            }
        ],
        'weight': 0.5
    },
    {
        'question': '오래 살고 싶은다',
        'answers': [
            {
                text: '될되로 되라 인생',
                score: 8
            },
            {
                text: '아무 생각이 없다.🐾',
                score: 2
            },
            {
                text: '천년만년 살것이다 🥱',
                score: 0
            }
        ],
        'weight': 0.3
    },
    {
        'question': '음주는 얼마나 하나',
        'answers': [
            {
                text: '주 0~1회',
                score: 6

            },
            {
                text: '주 2~3회',
                score: 4
            },
            {
                text: '매일 마신다',
                score: 3
            }
        ],
        'weight': 0.2
    },
    {
        'question': '질문1',
        'answers': [
            {
                text: '',
                score: 3

            },
            {
                text: '',
                score: 7
            }
        ],
        'weight': 0.6
    },
    {
        'question': '질문2',
        'answers': [
            {
                text: '',
                score: 2
            },
            {
                text: '',
                score: 8
            }
        ],
        'weight': 0.2
    },
    {
        'question': '질문3',
        'answers': [
            {
                text: '',
                score: 9
            },
            {
                text: '',
                score: 1
            }
        ],
        'weight': 0.2
    },
    {
        'question': '질문4',
        'answers': [
            {
                text: '',
                score: 7
            },
            {
                text: '',
                score: 3
            }
        ],
        'weight': 0.6
    },
    {
        'question': '질문5',
        'answers': [
            {
                text: '',
                score: 1
            },
            {
                text: '',
                score: 9
            }
        ],
        'weight': 0.4
    }
    ,
    {
        'question': '',
        'answers': [
            {
                text: '',
                score: 0
            },
            {
                text: '',
                score: 0
            }
        ],
        'weight': 0
    }
]

export default questions;