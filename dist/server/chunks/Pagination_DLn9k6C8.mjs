import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent, F as Fragment } from './astro/server_D5mPY-J_.mjs';
import 'kleur/colors';

const $$Astro = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { pagination, options } = Astro2.props;
  return renderTemplate`${() => {
    if (pagination) {
      const {
        currentPage,
        hasNextPage,
        hasPrevPage,
        nextPage,
        prevPage,
        totalPages
      } = pagination;
      const qQueryParam = options?.qQueryParam ? `&q=${options.qQueryParam}` : "";
      return renderTemplate`${maybeRenderHead()}<div class="flex justify-center gap-2 flex-wrap">${() => {
        if (hasPrevPage) {
          return renderTemplate`<a${addAttribute(`?page=${prevPage}${qQueryParam}`, "href")} class="pagination-item">${"<-"}</a>`;
        }
      }}${() => {
        if (currentPage) {
          let renderLinks = function(values, operator, currentPage2) {
            return values.map((num) => {
              const to = operator === "plus" ? currentPage2 + num : currentPage2 - num;
              const href = `?page=${to}${qQueryParam}`;
              if (totalPages) {
                if (operator === "plus") {
                  if (to < totalPages + 1) {
                    return renderTemplate`<a${addAttribute(href, "href")} class="pagination-item">${to}</a>`;
                  }
                } else {
                  if (to > 0) {
                    return renderTemplate`<a${addAttribute(href, "href")} class="pagination-item">${to}</a>`;
                  }
                }
              }
            });
          };
          if (currentPage === 1) {
            return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<span class="pagination-item active">${currentPage}</span>${renderLinks([1, 2, 3, 4], "plus", currentPage)}` })}`;
          }
          if (currentPage === 2) {
            return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderLinks([1], "min", currentPage)}<span class="pagination-item active">${currentPage}</span>${renderLinks([1, 2, 3], "plus", currentPage)}` })}`;
          }
          if (totalPages) {
            if (currentPage === totalPages - 1) {
              return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderLinks([3, 2, 1], "min", currentPage)}<span class="pagination-item active">${currentPage}</span>${renderLinks([1], "plus", currentPage)}` })}`;
            }
            if (currentPage === totalPages) {
              return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderLinks([4, 3, 2, 1], "min", currentPage)}<span class="pagination-item active">${currentPage}</span>` })}`;
            }
          }
          return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderLinks([2, 1], "min", currentPage)}<span class="pagination-item active">${currentPage}</span>${renderLinks([1, 2], "plus", currentPage)}` })}`;
        }
      }}${() => {
        if (hasNextPage) {
          return renderTemplate`<a${addAttribute(`?page=${nextPage}${qQueryParam}`, "href")} class="pagination-item">${"->"}</a>`;
        }
      }}</div>`;
    }
  }}`;
}, "C:/laragon/www/Splashanime-id/src/components/Pagination.astro", void 0);

export { $$Pagination as $ };
