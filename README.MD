# NotoSans KR 웹폰트

#### 빠른 로딩을 원한다면
- NotoSansKR-2350.css 를 이용하세요.
- 모든 한글에 적용되지 않고, 자주 사용하는 한글 2350자(완성형) + 영문/숫자/특문에만 적용됩니다.
- 뷁 같은 기 한글에는 폰트가 적용되지 않을 수 있습니다.

#### 로딩이 느려도 반드시 모든 글씨에 적용되길 원한다면.
- NotoSansKR-full.ᅟcss 파일을 이용하세요.
- 폰트 파일이 상당히 용량이 커서 로딩에 오랜 시간이 걸릴수 있습니다.

#### 일단 빠르게 로딩하고, 비동기적으로 모든 폰트를 로딩하고자 하면.
- 웹폰트 로더와 함께 NotoSansKR-all.js 파일을 이용하세요. (주의: js 파일이에요.)
- 기본적으로는 속도를 위해 NotoSansKR-2350.css을 로딩하고, 비동기적으로 NotoSansKR-full.ᅟcss를 로딩합니다.
- Full 폰트의 비동기 로딩이 완료된 이후에는 풀 폰트를 로딩합니다.
- 반드시 로딩하는 script의 id로 NotoSansKR-font-config 을 사용하고, 사용할 폰트를 data-font-config 속성에 아래와 같이 설정해야 합니다.
- data-font-config 속성은 fvd형태 (https://github.com/typekit/fvd)로 적어주세요.
    - ex) NotoSansKR:n4,n7 : NotoSansKR 폰트의 굵기가 400, 700인 폰트를 로딩하고 싶어요.
    - ex) NotoSansKR:n1,n2,n3 : NotoSansKR 폰트의 굵기가100, 200, 300인 폰트를 로딩하고 싶어요.
- 사용 예시
```
<script src="https://cdn.jsdelivr.net/webfontloader/latest/webfontloader.js"></script>
<script src="https://example.com/path/to/NotoSansKR-all.js"
        id="NotoSansKR-font-config"
        data-font-config="NotoSansKR:n4,n7"
        data-font-path="https://example.com/path/to/"
        >
</script>
```