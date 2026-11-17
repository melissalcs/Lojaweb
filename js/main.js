/** Gerador de banners e produtos */

//Gerador de banner com 6 paletas e estilos visuais distintos

function gerarBannerSVG(titulo,subtitulo, index) {
    const paletaBanner = [
        ['#0f2027', '#203a43', '#2c5364'], //1.dark cyan e navy
        ['#833ab4','#fd1d1d', '#fcb845'],//2.sunset orange e violet
        ['#11998e', '#38ef7d', '#0575e6'],//3.Tropical blue
        ['#d31027','#ea384d', '#7b4397'],//4. red $ purple
        ['#000428','#004e92','#00c6ff'], //5. deep royal blue
        ['#4568dc','#b06ab3','#e84393'], //6.
   ];
   const cores = paletasBanner[index % paletasBanner.length]

   const svg = `
   <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
   <defs>
        <linearGradient id="bannerGrad-${index}" x1="0%" y1="0%" x2="100%" y2="100%" >
        <stop offset="0%" stop-color="${cores[0]}"/>
        <stop offset="50%" stop-color="${cores[1]}"/>
        <stop offset="100%" stop-color="${cores[2]}"/>
        </linearGradient>
        <pattern id="pat-${index}" whidth="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="white" opacity"0.15"/>
            </pattern>
            </defs>
           <rect width="100%" height="100%" fill"url"(#bannerGrad-${index})"/>
        <rect width="100%" height="100%" fill"url"(#pat-${index})"/>
         <circle cx="1100" cy="80" r="180" fill="white" opacity"0.05"/>
          <circle cx="1100" cy="320" r="140" fill="white" opacity"0.05"/>
          </svg>`;
          return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

//até aqui criamos um código que cria de forma dinamica um banner SVG (imagem de fundo vetorial)
//até aqui criamos um código que cria de forma dinâmica um
// Banner SVG (imagem de fundo vetorial)
//Gerando um fundo sem precisar usar imagens prontas, tudo desenhado pelo código
//width="1200" height="400" define as dimensões do banner no formato horizontal
//A seção <defs> funciona como uma área de configurações
//podendo ser reutilizada a qualquer momento
//Neste código criamos cor gradiente e um padrão de bolinhas
//O banner será formado por 4 camadas
//Camada 1 = Gradiente colorido
//Camada 2 = Textura de bolinhas
//Camada 3 = Grande círculo translúcido à direita
//Camada 4 = Grande círculo translúcido à esquerda
//Gerando um banner responsivo.
 
//Gerador de Fotos de Produtoss