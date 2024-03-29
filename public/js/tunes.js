// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  jQuery(function() {
    window.Album = (function(_super) {

      __extends(Album, _super);

      function Album() {
        return Album.__super__.constructor.apply(this, arguments);
      }

      Album.prototype.isFirstTrack = function(index) {
        return index === 0;
      };

      Album.prototype.isLastTrack = function(index) {
        return index >= this.get('tracks').length - 1;
      };

      Album.prototype.trackUrlAtIndex = function(index) {
        if (this.get('tracks').length >= index) {
          return this.get('tracks')[index].url;
        } else {
          return null;
        }
      };

      return Album;

    })(Backbone.Model);
    window.Albums = (function(_super) {

      __extends(Albums, _super);

      function Albums() {
        return Albums.__super__.constructor.apply(this, arguments);
      }

      Albums.prototype.model = Album;

      Albums.prototype.url = '/albums';

      return Albums;

    })(Backbone.Collection);
    window.AlbumView = (function(_super) {

      __extends(AlbumView, _super);

      function AlbumView() {
        return AlbumView.__super__.constructor.apply(this, arguments);
      }

      AlbumView.prototype.tagName = 'li';

      AlbumView.prototype.className = 'album';

      AlbumView.prototype.initialize = function() {
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        return this.template = _.template($('#album-template').html());
      };

      AlbumView.prototype.render = function() {
        var renderedContent;
        renderedContent = this.template(this.model.toJSON());
        $(this.el).html(renderedContent);
        return this;
      };

      return AlbumView;

    })(Backbone.View);
    window.LibraryAlbumView = (function(_super) {

      __extends(LibraryAlbumView, _super);

      function LibraryAlbumView() {
        return LibraryAlbumView.__super__.constructor.apply(this, arguments);
      }

      return LibraryAlbumView;

    })(AlbumView);
    return window.LibraryView = (function(_super) {

      __extends(LibraryView, _super);

      function LibraryView() {
        return LibraryView.__super__.constructor.apply(this, arguments);
      }

      LibraryView.prototype.tagName = 'section';

      LibraryView.prototype.className = 'library';

      LibraryView.prototype.intialize = function() {
        _.bindAll(this, 'render');
        this.template = _.template($('#library-template').html());
        return this.collection.bind('reset', this.render);
      };

      LibraryView.prototype.render = function() {
        var $albums;
        $(this.el).html(this.template);
        $albums = this.$('.albums');
        this.collection.each(function(album) {
          var view;
          view = new LibraryAlbumView({
            model: album,
            collection: collection
          });
          return $albums.append(view.render().el);
        });
        return this;
      };

      return LibraryView;

    })(Backbone.View);
  });

}).call(this);
