class Helpers {

  urlHasScheme(url: string) {
    return (new RegExp('https?:*', 'ig')).test(url);
  }

}

const instance = new Helpers();
export { Helpers, instance };
