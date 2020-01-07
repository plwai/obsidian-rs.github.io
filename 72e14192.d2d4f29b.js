(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(1),i=n(6),r=(n(0),n(124)),c={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start"},s={id:"quick-start",title:"Quick Start",description:"## Quick install guide",source:"@site/docs/quick-start.md",permalink:"/docs/quick-start",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/quick-start.md",sidebar_label:"Quick Start",sidebar:"someSidebar",next:{title:"Style Guide",permalink:"/docs/doc1"}},l=[{value:"Quick install guide",id:"quick-install-guide",children:[]}],u={rightToc:l};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"quick-install-guide"},"Quick install guide"),Object(r.b)("p",null,"if you haven't installed ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust")," yet, here is a quick guide which using rustup:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),Object(r.b)("p",null,"After Rust is installed, you can use cargo to generate a new project:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cargo new my-app\n")),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"Cargo.toml")," file, add this line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:"{10}","{10}":!0}),'[package]\nname = "my-app"\nversion = "0.1.0"\nauthors = ["Gan Jun Kai <kuhn96@gmail.com>"]\nedition = "2018"\n\n# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html\n\n[dependencies]\nobsidian = "0.1.0-alpha.1"\n')),Object(r.b)("p",null,"Go to ",Object(r.b)("inlineCode",{parentName:"p"},"main.rs"),", add these:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust",metastring:"{1,4-11}","{1,4-11}":!0}),'use obsidian::App;\n\nfn main() {\n  let mut app = App::new();\n  let addr = ([127, 0, 0, 1], 3000).into();\n\n  app.get("/", |_ctx| "Hello World");\n\n  app.listen(&addr, || {\n    println!("server is listening to {}", &addr);\n  });\n}\n')),Object(r.b)("p",null,"Go to terminal type this to start your server:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cargo run\n")))}o.isMDXComponent=!0}}]);