interface Thumbnail {
  height: number;
  width: number;
  url: string;
}

interface Medium {
  height: number;
  width: number;
  url: string;
}

interface Small {
  height: number;
  width: number;
  url: string;
}

interface Large {
  height: number;
  width: number;
  url: string;
}

interface Original {
  height: number;
  width: number;
  url: string;
}

interface Source {
  name: string;
  localizedName: string;
}

interface User {
  username: string;
}

export class LocationPhotos {
  private data: any;

  constructor(data: any) {
    this.data = data;
  }

  getId(): number {
    return this.data.id;
  }

  getIsBlessed(): boolean {
    return this.data.isBlessed;
  }

  getCaption(): string {
    return this.data.caption;
  }

  getPublishedDate(): string {
    return this.data.publishedDate;
  }

  getThumbnail(): Thumbnail {
    return this.data.images.thumbnail;
  }

  getMedium(): Medium {
    return this.data.images.medium;
  }

  getSmall(): Small {
    return this.data.images.small;
  }

  getLarge(): Large {
    return this.data.images.large;
  }

  getOriginal(): Original {
    return this.data.images.original;
  }

  getAlbum(): string {
    return this.data.album;
  }

  getSourceName(): Source {
    return this.data.source;
  }

  getUsername(): User {
    return this.data.user;
  }
}
