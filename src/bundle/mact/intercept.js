// eslint-disable-next-line
import cheerio from 'cheerio';

class Intercept {
  constructor(nodes) {
    this.nodes = nodes;
    this.$ = cheerio.load(nodes.outerHTML);
    this.childAt = this.childAt.bind(this);
  }

  childAt() {
    return this.$(this.nodes.outerHTML).get(0).text();
  }

  find(selector) {
    const findAPI = {
      html: () => this.$.html(selector)
    };
    return findAPI;
  }

  hasClass(className, context) {
    return this.$(context || '*').hasClass(className);
  }

  html() {
    return this.nodes.outerHTML;
  }

  get RAW() {
    return this.$;
  }

}

export default Intercept;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzeC9tYWN0L2ludGVyY2VwdC5qcyJdLCJuYW1lcyI6WyJjaGVlcmlvIiwiSW50ZXJjZXB0IiwiY29uc3RydWN0b3IiLCJub2RlcyIsIiQiLCJsb2FkIiwib3V0ZXJIVE1MIiwiY2hpbGRBdCIsImJpbmQiLCJnZXQiLCJ0ZXh0IiwiZmluZCIsInNlbGVjdG9yIiwiZmluZEFQSSIsImh0bWwiLCJoYXNDbGFzcyIsImNsYXNzTmFtZSIsImNvbnRleHQiLCJSQVciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBT0EsT0FBUCxNQUFvQixTQUFwQjs7QUFFQSxNQUFNQyxTQUFOLENBQWdCO0FBQ2RDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLENBQUwsR0FBU0osT0FBTyxDQUFDSyxJQUFSLENBQWFGLEtBQUssQ0FBQ0csU0FBbkIsQ0FBVDtBQUVBLFNBQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBZjtBQUNEOztBQUVERCxFQUFBQSxPQUFPLEdBQUc7QUFDUixXQUFPLEtBQUtILENBQUwsQ0FBTyxLQUFLRCxLQUFMLENBQVdHLFNBQWxCLEVBQ0pHLEdBREksQ0FDQSxDQURBLEVBRUpDLElBRkksRUFBUDtBQUdEOztBQUVEQyxFQUFBQSxJQUFJLENBQUNDLFFBQUQsRUFBVztBQUNiLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxNQUFBQSxJQUFJLEVBQUUsTUFBTSxLQUFLVixDQUFMLENBQU9VLElBQVAsQ0FBWUYsUUFBWjtBQURFLEtBQWhCO0FBSUEsV0FBT0MsT0FBUDtBQUNEOztBQUVERSxFQUFBQSxRQUFRLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUFxQjtBQUMzQixXQUFPLEtBQUtiLENBQUwsQ0FBT2EsT0FBTyxJQUFJLEdBQWxCLEVBQXVCRixRQUF2QixDQUFnQ0MsU0FBaEMsQ0FBUDtBQUNEOztBQUVERixFQUFBQSxJQUFJLEdBQUc7QUFDTCxXQUFPLEtBQUtYLEtBQUwsQ0FBV0csU0FBbEI7QUFDRDs7QUFFRCxNQUFJWSxHQUFKLEdBQVU7QUFDUixXQUFPLEtBQUtkLENBQVo7QUFDRDs7QUFoQ2E7O0FBbUNoQixlQUFlSCxTQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCBjaGVlcmlvIGZyb20gJ2NoZWVyaW8nXHJcblxyXG5jbGFzcyBJbnRlcmNlcHQge1xyXG4gIGNvbnN0cnVjdG9yKG5vZGVzKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gbm9kZXNcclxuICAgIHRoaXMuJCA9IGNoZWVyaW8ubG9hZChub2Rlcy5vdXRlckhUTUwpXHJcblxyXG4gICAgdGhpcy5jaGlsZEF0ID0gdGhpcy5jaGlsZEF0LmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGNoaWxkQXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kKHRoaXMubm9kZXMub3V0ZXJIVE1MKVxyXG4gICAgICAuZ2V0KDApXHJcbiAgICAgIC50ZXh0KClcclxuICB9XHJcblxyXG4gIGZpbmQoc2VsZWN0b3IpIHtcclxuICAgIGNvbnN0IGZpbmRBUEkgPSB7XHJcbiAgICAgIGh0bWw6ICgpID0+IHRoaXMuJC5odG1sKHNlbGVjdG9yKSxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmluZEFQSVxyXG4gIH1cclxuXHJcbiAgaGFzQ2xhc3MoY2xhc3NOYW1lLCBjb250ZXh0KSB7XHJcbiAgICByZXR1cm4gdGhpcy4kKGNvbnRleHQgfHwgJyonKS5oYXNDbGFzcyhjbGFzc05hbWUpXHJcbiAgfVxyXG5cclxuICBodG1sKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXMub3V0ZXJIVE1MXHJcbiAgfVxyXG5cclxuICBnZXQgUkFXKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuJFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50ZXJjZXB0XHJcbiJdfQ==
//# sourceMappingURL=intercept.js.map
