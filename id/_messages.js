// - * - mode: java; c-basic-offset: 2; - * -
// Hak Cipta © 2018 Kodular. Seluruh hak cipta.

/ **
 * Bahasa Blok Visual
 *
 * Hak Cipta © 2018 Kodular. Seluruh hak cipta.
 * /

/ **
 * @fileoverview string Bahasa Inggris Tradisional.
 * /
'gunakan yang ketat';

goog.provide ('AI.Blockly.Msg.en');

goog.require ('Blockly.Msg.en');

/ **
 * Karena frekuensi string panjang, aturan bungkus 80-kolom tidak perlu berlaku
 * ke file pesan.
 * /

Blockly.Msg.en.switch_language_to_english = {
  // Beralih bahasa ke Bahasa Inggris.
  kategori: '',
  helpUrl: '',
  init: function () {
// Menu konteks.
    Blockly.Msg.UNDO = 'Undo';
    Blockly.Msg.REDO = 'Redo';
    Blockly.Msg.CLEAN_UP = 'Bersihkan Blok';
    Blockly.Msg.HIDE = 'Sembunyikan Kontrol Ruang Kerja';
    Blockly.Msg.SHOW = 'Tampilkan Kontrol Ruang Kerja';
    Blockly.Msg.DUPLICATE_BLOCK = 'Gandakan';
    Blockly.Msg.REMOVE_COMMENT = 'Hapus Komentar';
    Blockly.Msg.ADD_COMMENT = 'Tambah Komentar';
    Blockly.Msg.EXTERNAL_INPUTS = 'Input Eksternal';
    Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
    Blockly.Msg.HORIZONTAL_PARAMETERS = 'Atur Parameter Secara Horizontal';
    Blockly.Msg.VERTICAL_PARAMETERS = 'Atur Parameter Secara Vertikal';
    Blockly.Msg.CONFIRM_DELETE = 'Konfirmasi penghapusan';
    Blockly.Msg.DELETE_ALL_BLOCKS = "Hapus semua% 1 blok?";
    Blockly.Msg.DELETE_BLOCK = 'Hapus Blok';
    Blockly.Msg.DELETE_X_BLOCKS = 'Hapus% 1 Blok';
    Blockly.Msg.COLLAPSE_BLOCK = 'Ciutkan Blokir';
    Blockly.Msg.EXPAND_BLOCK = 'Bentangkan Blok';
    Blockly.Msg.DISABLE_BLOCK = 'Nonaktifkan Blok';
    Blockly.Msg.ENABLE_BLOCK = 'Aktifkan Blok';
    Blockly.Msg.HELP = 'Bantuan';
    Blockly.Msg.EXPORT_IMAGE = 'Unduh Blok sebagai Gambar';
    Blockly.Msg.COLLAPSE_ALL = 'Ciutkan Blok';
    Blockly.Msg.EXPAND_ALL = 'Luaskan Blok';
    Blockly.Msg.ARRANGE_H = 'Atur Blok Secara Horizontal';
    Blockly.Msg.ARRANGE_V = 'Atur Blok Secara Vertikal';
    Blockly.Msg.ARRANGE_S = 'Atur Blok Secara Diagonal';
    Blockly.Msg.SORT_W = 'Urutkan Blok Menurut Lebar';
    Blockly.Msg.SORT_H = 'Urutkan Blok dengan Tinggi';
    Blockly.Msg.SORT_C = 'Urutkan Blok berdasarkan Kategori';
    Blockly.Msg.COPY_TO_BACKPACK = 'Tambahkan ke Ransel';
    Blockly.Msg.COPY_ALLBLOCKS = 'Salin Semua Blok ke Backpack';
    Blockly.Msg.REMOVE_FROM_BACKPACK = 'Keluarkan dari Ransel';
    Blockly.Msg.BACKPACK_GET = 'Tempel Semua Blok dari Backpack';
    Blockly.Msg.BACKPACK_EMPTY = 'Kosongkan Ransel';
    Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Apakah Anda yakin ingin mengosongkan ransel?';
    Blockly.Msg.BACKPACK_DOC_TITLE = "Informasi Ransel";
    Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = "Tampilkan dokumentasi Backpack";
    Blockly.Msg.BACKPACK_DOCUMENTATION = "Backpack adalah fitur salin / tempel. Ini memungkinkan Anda untuk menyalin blok dari satu proyek atau layar" +
   "dan rekatkan ke proyek atau layar lain." +
   "Untuk menyalin, Anda dapat menyeret-dan-jatuhkan blok ke dalam Backpack. Untuk menempel, klik ikon Backpack dan" +
   "seret dan lepas blok ke ruang kerja." +
   "</p> <p> Jika Anda meninggalkan Kodular dengan sisa blok di ransel Anda," +
   "Mereka akan ada di sana saat kamu masuk berikutnya." +
   "</p> <p> Untuk dokumentasi lebih lanjut dan video 'bagaimana caranya', lihat:" +
   '</p> <p> <a href="https://docs.kodular.io/other/backpack.html" target="_blank"> https://docs.kodular.io/other/backpack.html </a> ';
    Blockly.Msg.ENABLE_GRID = 'Aktifkan Kotak Kerja';
    Blockly.Msg.DISABLE_GRID = 'Nonaktifkan Grid Ruang Kerja';
    Blockly.Msg.ENABLE_SNAPPING = 'Aktifkan Snap to Grid';
    Blockly.Msg.DISABLE_SNAPPING = 'Nonaktifkan Snap to Grid';
    Blockly.Msg.DISABLE_ALL_BLOCKS = 'Nonaktifkan Semua Blok';
    Blockly.Msg.ENABLE_ALL_BLOCKS = 'Aktifkan Semua Blok';
    Blockly.Msg.HIDE_ALL_COMMENTS = 'Sembunyikan Semua Komentar';
    Blockly.Msg.SHOW_ALL_COMMENTS = 'Tampilkan Semua Komentar';
    Blockly.Msg.GENERICIZE_BLOCK = 'Buat Generik';
    Blockly.Msg.UNGENERICIZE_BLOCK = 'Jadikan Spesifik';
    Blockly.Msg.DOWNLOAD_BLOCKS_AS_PNG = 'Unduh Blok sebagai PNG';

// Pengubahan nama variabel.
    Blockly.Msg.CHANGE_VALUE_TITLE = 'Ubah nilai:';
    Blockly.Msg.NEW_VARIABLE = 'Variabel baru ...';
    Blockly.Msg.NEW_VARIABLE_TITLE = 'Nama variabel baru:';
    Blockly.Msg.RENAME_VARIABLE = 'Ubah nama variabel ...';
    Blockly.Msg.RENAME_VARIABLE_TITLE = 'Ubah nama semua variabel "% 1" menjadi:';

// Toolbox.
    Blockly.Msg.VARIABLE_CATEGORY = 'Variabel';
    Blockly.Msg.PROCEDURE_CATEGORY = 'Prosedur';

// Peringatan / Kesalahan
    Blockly.Msg.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "Blok ini tidak bisa dalam definisi";
    Blockly.Msg.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Pilih item yang valid di drop down.";
    Blockly.Msg.ERROR_DUPLICATE_EVENT_HANDLER = "Ini adalah pengendali event duplikat untuk komponen ini.";
    Blockly.Msg.ERROR_COMPONENT_DOES_NOT_EXIST = "Komponen tidak ada";
    Blockly.Msg.ERROR_BLOCK_IS_NOT_DEFINED = "Blok ini tidak ditentukan. Hapus blok ini!";
    Blockly.Msg.ERROR_BREAK_ONLY_IN_LOOP = "Blok break hanya boleh digunakan dalam loop";

// Blok Warna.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.kodular.io/blocks/colors#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Klik kotak untuk memilih warna.';
    Blockly.Msg.LANG_COLOUR_WHITE = 'white';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'abu-abu terang';
    Blockly.Msg.LANG_COLOUR_GRAY = 'grey';
    Blockly.Msg.LANG_COLOUR_BLUE_GRAY = 'blue grey';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'abu-abu gelap';
    Blockly.Msg.LANG_COLOUR_BLACK = 'hitam';
    Blockly.Msg.LANG_COLOUR_RED = 'red';
    Blockly.Msg.LANG_COLOUR_PINK = 'pink';
    Blockly.Msg.LANG_COLOUR_PURPLE = 'ungu';
    Blockly.Msg.LANG_COLOUR_DEEP_PURPLE = 'ungu tua';
    Blockly.Msg.LANG_COLOUR_INDIGO = 'indigo';
    Blockly.Msg.LANG_COLOUR_BLUE = 'biru';
    Blockly.Msg.LANG_COLOUR_LIGHT_BLUE = 'biru muda';
    Blockly.Msg.LANG_COLOUR_CYAN = 'cyan';
    Blockly.Msg.LANG_COLOUR_TEAL = 'teal';
    Blockly.Msg.LANG_COLOUR_GREEN = 'hijau';
    Blockly.Msg.LANG_COLOUR_LIGHT_GREEN = 'hijau muda';
    Blockly.Msg.LANG_COLOUR_LIME = 'lime';
    Blockly.Msg.LANG_COLOUR_YELLOW = 'yellow';
    Blockly.Msg.LANG_COLOUR_AMBER = 'amber';
    Blockly.Msg.LANG_COLOUR_ORANGE = 'oranye';
    Blockly.Msg.LANG_COLOUR_DEEP_ORANGE = 'oranye tua';
    Blockly.Msg.LANG_COLOUR_BROWN = 'brown';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'split color';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.kodular.io/blocks/colors#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "Daftar empat elemen, masing-masing dalam kisaran 0 hingga 255, mewakili komponen merah, hijau, biru dan alfa.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'buat warna';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.kodular.io/blocks/colors#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "Warna dengan komponen alfa merah, hijau, biru, dan opsional";

// Blok Kontrol
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Kontrol';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.kodular.io/blocks/control#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Jika suatu nilai benar, maka lakukan beberapa pernyataan.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Jika nilainya benar, maka lakukan blok pernyataan pertama. \ N' +
        'Kalau tidak, lakukan blok pernyataan kedua.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Jika nilai pertama benar, maka lakukan blok pernyataan pertama. \ N' +
        'Kalau tidak, jika nilai kedua benar, lakukan blok pernyataan kedua.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Jika nilai pertama benar, maka lakukan blok pernyataan pertama. \ N' +
        'Kalau tidak, jika nilai kedua benar, lakukan blok pernyataan kedua. \ N' +
        'Jika tidak ada nilai yang benar, lakukan blok pernyataan terakhir.';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'jika';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'else if';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'else';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'lalu';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'jika';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Tambah, hapus, atau susun ulang bagian \ n' +
        'untuk mengkonfigurasi ulang ini jika diblokir.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'else if';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Tambahkan kondisi ke blok if.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'else';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Tambahkan kondisi final, tangkap semua ke blok if.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.kodular.io/blocks/control#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'repeat';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'hingga';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Sementara nilainya benar, maka lakukan beberapa pernyataan.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Sementara nilainya salah, maka lakukan beberapa pernyataan.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Jalankan blok di bagian \' do \ 'sementara tesnya adalah'
        + 'benar.';

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'hitung dengan';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'from';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'to';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'do';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Hitung dari nomor mulai ke nomor akhir. \ N' +
        'Untuk setiap penghitungan, setel jumlah penghitungan saat ini ke \ n' +
        'variabel "% 1", lalu lakukan beberapa pernyataan.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.kodular.io/blocks/control#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'untuk masing-masing';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'number';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'from';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'to';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'by';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'untuk angka dalam rentang';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'untuk';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = 'dalam jangkauan';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Jalankan blok di bagian \' do \ 'untuk setiap angka'
        Nilai + 'dalam rentang dari awal hingga akhir, melangkah nilainya setiap kali. Gunakan yang diberikan '
        + 'nama variabel untuk merujuk ke nilai saat ini.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.kodular.io/blocks/control#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'untuk masing-masing';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'item';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'dalam daftar';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'untuk item dalam daftar';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'untuk';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = 'dalam daftar';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Jalankan blok di bagian \' do \ 'untuk setiap item di'
        + daftar. Gunakan nama variabel yang diberikan untuk merujuk ke item daftar saat ini. ';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.kodular.io/blocks/control#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'dari loop';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'break out';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'lanjutkan dengan iterasi berikutnya';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Keluar dari loop yang mengandung.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Lewati sisa lingkaran ini, dan \ n' +
        'lanjutkan dengan iterasi berikutnya.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Peringatan: \ n' +
        'Blokir ini hanya boleh \ n' +
        'digunakan dalam satu lingkaran.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.kodular.io/blocks/control#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'test';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'do';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Jalankan blok di bagian \' do \ 'sementara tesnya adalah'
        + 'benar.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.kodular.io/blocks/control#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'jika'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'lalu';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'else';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'jika';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Jika kondisi yang diuji benar,'
        + 'kembalikan hasil evaluasi ekspresi yang dilampirkan pada slot \' then-return \ ';'
        + 'jika tidak kembalikan hasil evaluasi ekspresi yang dilampirkan pada slot \' else-return \ ';'
        + 'paling banyak salah satu dari ekspresi slot kembali akan dievaluasi.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.kodular.io/blocks/control#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'lakukan';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'hasil';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Jalankan blok di \' do \ 'dan kembalikan pernyataan. Berguna jika Anda perlu menjalankan prosedur sebelum mengembalikan nilai ke variabel. ';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'lakukan / hasil';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'hasil';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'evaluasi tetapi abaikan hasil'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.kodular.io/blocks/control#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'eval tapi abaikan'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Menjalankan blok kode yang terhubung dan mengabaikan nilai balik (jika ada). Berguna jika perlu memanggil prosedur dengan nilai pengembalian tetapi tidak memerlukan nilai. ';

    / * [lyn, 10/14/13] Dihapus untuk saat ini. Mungkin kembali suatu hari nanti.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'tidak ada';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.kodular.io/blocks/control#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Tidak menghasilkan apa-apa. Digunakan untuk menginisialisasi variabel atau dapat dicolokkan ke soket pengembalian jika tidak ada nilai yang diperlukan untuk kembali. ini setara dengan nol atau Tidak Ada. ';
     * /

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.kodular.io/blocks/control#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'buka layar lain';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'screenName';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'layar terbuka';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Membuka layar baru di beberapa aplikasi layar.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'buka layar lain dengan nilai awal';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'screenName';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'startValue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'layar terbuka dengan nilai'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Membuka layar baru di beberapa aplikasi layar dan melewati'
        + 'mulai nilai ke layar itu.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'dapatkan nilai awal';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'screenName';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'startValue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'dapatkan nilai awal';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Mengembalikan nilai yang diteruskan ke layar ini saat itu'
        + 'dibuka, biasanya oleh layar lain di aplikasi multi-layar. Jika tidak ada nilai '
        + 'berlalu, mengembalikan teks kosong.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.kodular.io/blocks/control#closescreen' ;;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'tutup layar';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'tutup layar';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Tutup layar saat ini';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'tutup layar dengan nilai';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'hasil';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'tutup layar dengan nilai';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Menutup layar saat ini dan mengembalikan hasilnya ke'
        + 'Layar yang membuka yang ini.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.kodular.io/blocks/control#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'tutup aplikasi';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'tutup aplikasi';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Menutup semua layar dalam aplikasi ini dan menghentikan aplikasi.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.kodular.io/blocks/control#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'dapatkan teks awal yang sederhana';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'dapatkan teks awal yang sederhana';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Mengembalikan teks biasa yang diteruskan ke layar ini saat'
        + 'dimulai oleh aplikasi lain. Jika tidak ada nilai yang diteruskan, kembalikan teks yang kosong. Untuk '
        + 'beberapa aplikasi layar, gunakan get start value daripada get text start polos.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.kodular.io/blocks/control#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'tutup layar dengan teks biasa';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'tutup layar dengan teks biasa';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Menutup layar saat ini dan mengembalikan teks ke aplikasi yang'
        Saya membuka yang ini. Perintah ini untuk mengembalikan teks ke aktivitas non-Kodular, bukan ke layar Kodular. '
        + 'Untuk Layar Kodular, seperti pada beberapa aplikasi layar, gunakan Tutup Layar dengan Nilai, bukan Tutup Layar dengan Teks Biasa.';

    Blockly.Msg.LANG_CONTROLS_BREAK_HELPURL = "https://docs.kodular.io/blocks/control#break";
    Blockly.Msg.LANG_CONTROLS_BREAK_TITLE = "break";
    Blockly.Msg.LANG_CONTROLS_BREAK_INPUT_TEXT = "value";
    Blockly.Msg.LANG_CONTROLS_BREAK_COLLAPSED_TEXT = "break";

// Blok Logika.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logic';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/blocks/logic#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/blocks/logic#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Tes apakah dua hal itu sama. \ n '+
        “Hal-hal yang dibandingkan dapat berupa hal apa saja, bukan hanya angka. \ n '+
        'Angka dianggap sama dengan bentuk cetakannya sebagai string, \ n' +
        'misalnya, angka 0 sama dengan teks \ "0 \". Juga, dua string \ n '+
        'yang mewakili angka sama jika angka sama, misalnya \ n' +
        '\ "1 \" sama dengan \ "01 \".';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Kembalikan benar jika kedua input tidak sama satu sama lain.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'logika sama';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\ u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.kodular.io/blocks/logic#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.kodular.io/blocks/logic#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'and';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'or';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Kembalikan benar jika semua input benar.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Kembalikan benar jika ada input yang benar.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.kodular.io/blocks/logic#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'not';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Mengembalikan nilai true jika input salah. \ N' +
        'Mengembalikan nilai false jika inputnya benar.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.kodular.io/blocks/logic#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.kodular.io/blocks/logic#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Mengembalikan boolean true.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Mengembalikan boolean false.';

// Blok Matematika.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Matematika';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.kodular.io/blocks/math#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Laporkan nomor yang ditunjukkan.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'number';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/blocks/math#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/blocks/math#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.kodular.io/blocks/math#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.kodular.io/blocks/math#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.kodular.io/blocks/math#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.kodular.io/blocks/math#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Kembalikan benar jika kedua angka sama satu sama lain.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Kembalikan benar jika kedua angka tidak sama satu sama lain.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Kembalikan benar jika angka pertama lebih kecil \ n' +
        'dari angka kedua.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Kembalikan benar jika angka pertama lebih kecil \ n' +
        'dari atau sama dengan angka kedua.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Kembalikan benar jika angka pertama lebih besar \ n' +
        'dari angka kedua.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Kembalikan benar jika angka pertama lebih besar \ n' +
        'dari atau sama dengan angka kedua.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\ u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE = '\ u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE = '\ u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.kodular.io/blocks/math#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.kodular.io/blocks/math#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.kodular.io/blocks/math#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.kodular.io/blocks/math#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.kodular.io/blocks/math#exponent';
    Blockly.Msg.LANG_MATH_BITWISE_HELPURL_AND = 'https://docs.kodular.io/blocks/math#bitwise-and';
    Blockly.Msg.LANG_MATH_BITWISE_HELPURL_IOR = 'https://docs.kodular.io/blocks/math#bitwise-ior';
    Blockly.Msg.LANG_MATH_BITWISE_HELPURL_XOR = 'https://docs.kodular.io/blocks/math#bitwise-xor';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Kembalikan jumlah dari dua angka.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Kembalikan perbedaan dua angka.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Kembalikan produk dari dua angka.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Kembalikan hasil bagi dari dua angka.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Kembalikan angka pertama yang dinaikkan ke \ n' +
        'kekuatan angka kedua.';
    Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_AND = 'Kembalikan bitwise DAN dari dua angka.';
    Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_IOR = 'Kembalikan bitwise inklusif ATAU dari dua angka.';
    Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_XOR = 'Kembalikan bitwise eksklusif ATAU dari dua angka.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

    Blockly.Msg.LANG_MATH_BITWISE_AND = 'bitwise and';
    Blockly.Msg.LANG_MATH_BITWISE_IOR = 'bitwise or';
    Blockly.Msg.LANG_MATH_BITWISE_XOR = 'bitwise xor';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'ubah';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'oleh';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Tambahkan angka ke variabel "% 1".'; * /


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'root kuadrat';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolute';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'neg';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e ^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Kembalikan akar kuadrat dari angka.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.kodular.io/blocks/math#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Kembalikan nilai absolut suatu angka.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.kodular.io/blocks/math#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Kembalikan negasi angka.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.kodular.io/blocks/math#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Kembalikan logaritma natural dari angka, yaitu logaritma ke basis e (2,71828 ...)';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN = 'https: //docs.kodular.io/blocks/math#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Kembalikan e (2.71828 ...) ke kekuatan angka.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP = 'https: //docs.kodular.io/blocks/math#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Kembalikan 10 pangkat angka.'; * /

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Membulatkan angka ke atas atau ke bawah.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.kodular.io/blocks/math#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Membulatkan input ke yang terkecil \ n' +
        'nomor tidak kurang dari input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING = 'https://docs.kodular.io/blocks/math#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Membulatkan input ke yang terbesar \ n' +
        'angka tidak lebih besar daripada input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR = 'https://docs.kodular.io/blocks/math#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'bulat';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'langit-langit';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'floor';

    Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';
    Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
    Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
    Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';
    Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
    Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Memberikan sinus dari sudut yang diberikan dalam derajat.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.kodular.io/blocks/math#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Memberikan kosinus dari sudut yang diberikan dalam derajat.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.kodular.io/blocks/math#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Memberikan garis singgung dari sudut yang diberikan dalam derajat.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.kodular.io/blocks/math#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Memberikan sudut dalam kisaran (-90, + 90] \ n' +
        'derajat dengan nilai sinus yang diberikan.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.kodular.io/blocks/math#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Memberikan sudut dalam kisaran [0, 180) \ n' +
        'derajat dengan nilai kosinus yang diberikan.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.kodular.io/blocks/math#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Memberikan sudut dalam kisaran (-90, +90) \ n' +
        'derajat dengan nilai tangen yang diberikan.';
    ATAN: Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.kodular.io/blocks/math#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Memberikan sudut dalam kisaran (-180, +180] \ n' +
        'derajat dengan koordinat persegi panjang yang diberikan.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.kodular.io/blocks/math#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'maks';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Kembalikan argumennya yang terkecil ..';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Kembalikan argumennya yang terbesar ..';
    Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MIN = 'https://docs.kodular.io/blocks/math/#min';
    Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MAX = 'https://docs.kodular.io/blocks/math/#max';

    Blockly.Msg.LANG_MATH_DIVIDE = '\ u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'modulo of';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'sisa dari';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quotient of';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Kembalikan modulo.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.kodular.io/blocks/math#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Kembalikan sisanya.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.kodular.io/blocks/math#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Kembalikan hasil bagi.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.kodular.io/blocks/math#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.kodular.io/blocks/math#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'bilangan bulat acak';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'from';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'to';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'bilangan bulat acak dari% 1 hingga% 2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Mengembalikan bilangan bulat acak antara batas atas \ n' +
        'dan batas bawah. Batas akan dipotong menjadi lebih kecil \ n '+
        'dari 2 ** 30.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.kodular.io/blocks/math#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'fraksi acak';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Kembalikan angka acak antara 0 dan 1.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.kodular.io/blocks/math#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'seed set acak';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'to';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'menentukan benih numerik \ n' +
        'untuk generator nomor acak';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'convert';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radian ke derajat';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'derajat ke radian';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Mengembalikan nilai derajat dalam rentang \ n' +
        '[0, 360) sesuai dengan argumen radiannya.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.kodular.io/blocks/math#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Mengembalikan nilai radian dalam rentang \ n' +
        '[- \ u03C0, + \ u03C0) sesuai dengan argumen derajatnya.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.kodular.io/blocks/math#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'format sebagai desimal';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'angka';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'tempat';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'format sebagai angka desimal% 1 tempat% 2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Mengembalikan angka yang diformat sebagai desimal \ n' +
        'dengan sejumlah tempat yang ditentukan.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'adalah angka?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Menguji apakah ada angka.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'Apakah Base 10?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Menguji apakah sesuatu adalah string yang mewakili bilangan bulat basis 10 yang positif.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'apakah heksadesimal?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Menguji apakah sesuatu adalah string yang mewakili angka heksadesimal.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'biner?';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Menguji apakah ada string yang mewakili angka biner.';


    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'convert number';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'base 10 to hex';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = 'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Mengambil bilangan bulat positif di basis 10 dan mengembalikan string yang mewakili angka dalam heksadesimal';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'heks ke basis 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = 'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Mengambil string yang mewakili angka dalam heksadesimal dan mengembalikan string yang mewakili angka dalam basis 10';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'base 10 to binary';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = 'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Mengambil bilangan bulat positif di basis 10 dan mengembalikan string yang mewakili angka dalam biner';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'biner ke basis 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = 'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Mengambil string yang mewakili angka dalam biner dan mengembalikan string yang mewakili angka di basis 10';

// Blok Teks.
    Blockly.Msg.LANG_CATEGORY_TEXT = 'Teks';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.kodular.io/blocks/text#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'String teks.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\ u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\ u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.kodular.io/blocks/text#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'buat teks dengan';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Tambahkan semua input untuk membentuk string teks tunggal. \ N'
        + 'Jika tidak ada input, buat teks kosong.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'gabung';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'string';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO = 'to';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'tambahkan teks';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'item';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Tambahkan beberapa teks ke variabel "% 1".';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.kodular.io/blocks/text#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'panjang';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Mengembalikan jumlah huruf (termasuk spasi) \ n' +
        'dalam teks yang disediakan.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.kodular.io/blocks/text#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'kosong';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Mengembalikan nilai true jika panjang teks \ n' + 'adalah 0, false jika tidak.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = '<';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = '=';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = '>';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.kodular.io/blocks/text#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = ​​'bandingkan teks';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Menguji apakah text1 secara leksikografis kurang dari text2. \ N'
        + 'jika satu teks adalah awalan dari yang lain, teks yang lebih pendek adalah \ n'
        + dianggap lebih kecil. Huruf besar mendahului karakter huruf kecil. ';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Menguji apakah string teks identik, mis., Memiliki nilai yang sama \ n'
        karakter + 'dalam urutan yang sama. Ini berbeda dari biasa = \ n '
        + 'dalam kasus di mana string teks adalah angka: 123 dan 0123 adalah = \ n'
        + 'tetapi bukan teks =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Laporkan apakah teks1 secara leksikografis lebih besar dari teks2. \ N'
        + 'jika satu teks adalah awalan dari yang lain, teks yang lebih pendek dianggap lebih kecil. \ n'
        + 'Karakter huruf besar mendahului karakter huruf kecil.';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = "Menghasilkan teks, seperti blok teks. Perbedaannya adalah bahwa \ n"
        + "Teks tidak mudah ditemukan dengan memeriksa APK aplikasi. Gunakan ini saat membuat aplikasi \ n"
        + "untuk mendistribusikan yang menyertakan informasi rahasia, misalnya, kunci API. \ n"
        + "Peringatan: Ini hanya memberikan keamanan yang sangat rendah terhadap musuh ahli.";
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Teks Mengaburkan';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.kodular.io/blocks/text#obfuscatetext';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp88.doc%2Fref2 %%fars ;
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'huruf dalam teks';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Mengembalikan jumlah huruf yang ditentukan di awal atau akhir teks.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'pertama';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last'; * /

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp88.doc%2Fref2 %%fars ;
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'temukan';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'kemunculan teks';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'dalam teks';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Mengembalikan indeks kejadian pertama / terakhir \ n' +
     'dari teks pertama dalam teks kedua. \ n' +
     'Mengembalikan 0 jika teks tidak ditemukan.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'pertama';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'terakhir'; * /

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flang?hl=id URL ;
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'dalam teks';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Mengembalikan surat pada posisi yang ditentukan.'; * /

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'huruf besar';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'downcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Mengembalikan salinan argumen string teksnya yang dikonversi menjadi huruf besar.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.kodular.io/blocks/text#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Mengembalikan salinan argumen string teksnya yang dikonversi menjadi huruf kecil.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.kodular.io/blocks/text#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.kodular.io/blocks/text#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'trim';
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Mengembalikan salinan argumen string teksnya dengan \ n'
        + 'spasi awal atau akhir dihapus.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.kodular.io/blocks/text#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'dimulai pada';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'piece';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'dimulai dengan teks% 1 piece% 2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Mengembalikan indeks awal dari bagian dalam teks. \ N'
        + 'di mana indeks 1 menunjukkan awal teks. Mengembalikan 0 jika \ n '
        + 'bagian tidak ada dalam teks.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.kodular.io/blocks/text#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'berisi';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'piece';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'mengandung teks% 1 piece% 2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Tes apakah karya tersebut terkandung dalam teks.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'at';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'at (list)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'pisah terlebih dahulu';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'pisah dulu apa saja';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'split';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'pisah setiap saat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Membagi teks yang diberikan menjadi dua bagian dengan menggunakan lokasi kemunculan pertama \ n'
        + 'teks \' at \ 'sebagai titik pemisah, dan mengembalikan daftar dua item yang terdiri dari bagian \ n'
        + 'sebelum titik pembagian dan potongan setelah titik pembagian. \ n '
        + 'Memecah "apel, pisang, ceri, dogfood" dengan koma sebagai titik pemisahan \ n'
        + 'mengembalikan daftar dua item: yang pertama adalah teks "apel" dan yang kedua adalah teks \ n'
        "Pisang, ceri, makanan anjing". \ n '
        + 'Perhatikan bahwa koma setelah "apel" tidak muncul dalam hasil, \ n'
        + 'karena itu adalah titik pemisah.';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.kodular.io/blocks/text#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Membagi teks yang diberikan menjadi daftar dua item, menggunakan lokasi pertama dari item apa saja \ n'
        + 'dalam daftar \' at \ 'sebagai titik pemisah. \ n \ n '
        + 'Membagi "Saya suka apel, apel, anggur" dengan daftar "(ba, ap)" mengembalikan \ n'
        + 'daftar dua item, yang pertama adalah "Aku cinta" dan yang kedua adalah \ n'
        + '"ples pisang apel anggur."';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.kodular.io/blocks/text#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Membagi teks menjadi beberapa bagian menggunakan teks \' at \ 'sebagai titik pemisah dan menghasilkan daftar hasil. \ n '
        + 'Membagi "satu, dua, tiga, empat" at "," (koma) mengembalikan daftar "(satu dua tiga empat)". \ n '
        + 'Memisahkan "satu-kentang, dua-kentang, tiga-kentang, empat" pada "-kentang", mengembalikan daftar "(satu dua tiga empat)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.kodular.io/blocks/text#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Membagi teks yang diberikan ke dalam daftar, menggunakan salah satu item dalam daftar \' at \ 'sebagai \ n'
        + 'titik pemisah, dan mengembalikan daftar hasil. \ n '
        + 'Memecah "apel, pisang, ceri, dogfood" dengan \' at \ 'sebagai daftar dua elemen yang \ n'
        + 'item pertama adalah koma dan item kedua "rry" mengembalikan daftar empat item: \ n'
        + '"(applebe banana che dogfood)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.kodular.io/blocks/text#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Cetak teks, angka, atau nilai lain yang ditentukan.'; * /

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'prompt for';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt untuk input pengguna dengan teks yang ditentukan.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number'; * /

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.kodular.io/blocks/text#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'pisah di spasi';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Bagi teks menjadi potongan-potongan yang dipisahkan oleh spasi.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.kodular.io/blocks/text#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segmen';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'mulai';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'length';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'teks segmen% 1 mulai% 2 panjang% 3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Ekstraksi segmen dari panjang yang diberikan dari teks yang diberikan \ n'
        + 'mulai dari teks yang diberikan mulai dari posisi yang diberikan. Posisi \ n '
        + '1 menunjukkan awal teks.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.kodular.io/blocks/text#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segmen';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'ganti semua';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'pengganti';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'ganti semua teks% 1 segmen% 2 penggantian% 3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Mengembalikan teks baru yang diperoleh dengan mengganti semua kemunculan \ n'
        + 'dari segmen dengan penggantian.';

    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = 'https://docs.kodular.io/blocks/text#isstring';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'is string?';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Mengembalikan nilai true jika input adalah string.';

// Daftar Blok.
    Blockly.Msg.LANG_CATEGORY_LISTS = 'Daftar';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'buat daftar kosong';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Mengembalikan daftar, dengan panjang 0, tidak mengandung catatan data';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.kodular.io/blocks/lists#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'buat daftar';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Buat daftar dengan sejumlah item.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'daftar';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Tambah, hapus, atau susun ulang bagian untuk mengkonfigurasi ulang blok daftar ini.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'item';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Tambahkan item ke daftar.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Tambahkan item ke daftar.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.kodular.io/blocks/lists#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'pilih item daftar';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'indeks';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'pilih daftar item daftar% 1 indeks% 2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Mengembalikan item pada indeks posisi dalam daftar.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.kodular.io/blocks/lists#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'ada dalam daftar?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'ada dalam daftar? hal% 1 daftar% 2 '
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Mengembalikan nilai true jika masalahnya adalah item dalam daftar, dan'
        + 'salah jika tidak.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.kodular.io/blocks/lists#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'indeks dalam daftar';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'indeks dalam daftar hal% 1 daftar% 2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Temukan posisi benda dalam daftar. Jika tidak ada di '
        + 'daftar, kembalikan 0.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'pilih item acak';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Pilih item secara acak dari daftar.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'ganti item daftar';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'indeks';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'pengganti';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'ganti daftar item daftar% 1 indeks% 2 penggantian% 3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Mengganti item ke-n dalam daftar.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'hapus item daftar';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'indeks';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'hapus daftar item daftar% 1 indeks% 2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Menghapus item pada posisi yang ditentukan dari daftar.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Frefhtmtempatfars ;
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'buat daftar dengan item';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'diulang';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Membuat daftar yang terdiri dari nilai yang diberikan \ n' +
     'mengulangi berapa kali yang ditentukan.'; * /

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.kodular.io/blocks/lists#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'panjang daftar';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'panjang daftar daftar% 1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Hitung jumlah item dalam daftar.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.kodular.io/blocks/lists#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'tambahkan ke daftar';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'list1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'list2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'tambahkan ke daftar daftar1% 1 daftar2% 2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Tambahkan semua item dalam list2 ke akhir daftar1. Setelah '
        + 'append, list1 akan menyertakan elemen-elemen tambahan ini, tetapi list2 tidak akan berubah.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.kodular.io/blocks/lists#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'tambahkan item ke daftar';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'tambahkan item ke daftar daftar% 1 item% 2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Menambahkan item ke akhir daftar.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'daftar';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Tambah, hapus, atau susun ulang bagian untuk mengonfigurasi ulang blok daftar ini.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.kodular.io/blocks/lists#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'salin daftar';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Buat salinan daftar, termasuk menyalin semua sub daftar';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.kodular.io/blocks/lists#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'is a list?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Menguji apakah ada daftar.';

    Blockly.Msg.LANG_LISTS_REVERSE_HELPURL = 'https://docs.kodular.io/blocks/lists#reverse';
    Blockly.Msg.LANG_LISTS_REVERSE_TITLE_REVERSE = 'daftar terbalik';
    Blockly.Msg.LANG_LISTS_REVERSE_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_REVERSE_TOOLTIP = 'Membalik urutan urutan input dan mengembalikannya sebagai daftar baru.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.kodular.io/blocks/lists#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'daftar ke baris csv';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Menafsirkan daftar sebagai deretan tabel dan mengembalikan CSV'
        + '\ (nilai yang dipisahkan koma \) yang mewakili baris. Setiap item dalam daftar baris adalah '
        + 'dianggap sebagai bidang, dan dikutip dengan tanda kutip ganda dalam teks CSV yang dihasilkan. '
        + 'Item dipisahkan oleh koma. Teks baris yang dikembalikan tidak memiliki pemisah baris di '
        + 'akhir.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.kodular.io/blocks/lists#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'daftar dari baris csv';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Parsing teks sebagai CSV \ (nilai yang dipisahkan koma \) diformat'
        Baris + 'untuk menghasilkan daftar bidang. Ini adalah kesalahan untuk teks baris yang mengandung unescaped '
        + 'baris baru di dalam bidang \ (efektif, banyak baris \). Tidak apa-apa untuk teks baris ke '
        + 'diakhiri dengan satu baris baru atau CRLF.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.kodular.io/blocks/lists#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'daftar ke tabel csv';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Menafsirkan daftar sebagai tabel dalam format baris-utama dan'
        + 'mengembalikan teks CSV \ (nilai yang dipisahkan koma \) yang mewakili tabel. Setiap item dalam '
        Daftar + 'seharusnya merupakan daftar yang mewakili deretan tabel CSV. Setiap item dalam baris '
        + 'Daftar dianggap sebagai bidang, dan dikutip dengan tanda kutip ganda dalam CSV yang dihasilkan'
        teks + '. Dalam teks yang dikembalikan, item dalam baris dipisahkan dengan koma dan baris adalah '
        + 'dipisahkan oleh CRLF \ (\\ r \\ n \).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.kodular.io/blocks/lists#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'daftar dari tabel csv';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Parsing teks sebagai CSV \ (nilai yang dipisahkan koma \) diformat'
        Tabel + 'untuk menghasilkan daftar baris, yang masing-masing adalah daftar bidang. Baris bisa '
        + 'dipisahkan oleh baris baru \ (\\ n \) atau CRLF \ (\\ r \\ n \).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'masukkan item daftar';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'indeks';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'masukkan daftar item daftar% 1 indeks% 2 item% 3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Masukkan item ke daftar pada posisi yang ditentukan.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.kodular.io/blocks/lists#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'apakah daftar kosong?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Mengembalikan nilai true jika daftar kosong.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.kodular.io/blocks/lists#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'lihat berpasangan';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'key';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'pasangan';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'notFound';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'lihat kunci berpasangan% 1 pair% 2 notFound% 3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Mengembalikan nilai yang terkait dengan kunci dalam daftar pasangan';

    // Gabung Dengan blok Pemisah
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_HELPURL = 'https://docs.kodular.io/blocks/lists#joinwithseparator';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TITLE = 'bergabung dengan pemisah';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_SEPARATOR = 'separator';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_LIST = 'daftar';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_INPUT = 'gabung item menggunakan pemisah% 1 daftar% 2';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TOOLTIP = 'Mengembalikan teks dengan elemen daftar yang digabungkan dengan pemisah';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Fref2 %%fars ;
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'temukan';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'kemunculan item';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'dalam daftar';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Mengembalikan indeks kejadian pertama / terakhir \ n' +
     'dari item dalam daftar. \ n' +
     'Mengembalikan 0 jika teks tidak ditemukan.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'pertama';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'terakhir';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Feja?hl=id'
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'dapatkan item di';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'dalam daftar';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Mengembalikan nilai pada posisi yang ditentukan dalam daftar.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Feja?hl=id'
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'set item at';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'dalam daftar';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Tetapkan nilai pada posisi yang ditentukan dalam daftar.'; * /

// Blok Variabel.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.kodular.io/blocks/variables#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'inisialisasi global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Buat variabel global dan berikan nilai dari blok yang dilampirkan.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.kodular.io/blocks/variables#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'get';
    / * Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; * / // [lyn, 10/14/13] tidak digunakan
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'get';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Mengembalikan nilai variabel ini.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.kodular.io/blocks/variables#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'set';
    / * Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; * / // [lyn, 10/14/13] tidak digunakan
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'set';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Atur variabel ini menjadi sama dengan input.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = 'variabel';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.kodular.io/blocks/variables#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'inisialisasi lokal';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Memungkinkan Anda membuat variabel yang hanya dapat diakses di bagian do blok ini.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'inisialisasi lokal di lakukan';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.kodular.io/blocks/variables#return';
    / * // Ini tidak berbeda antara pernyataan dan ekspresi
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'inisialisasi lokal';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'name';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'to';
     * /
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'lokal';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Memungkinkan Anda membuat variabel yang hanya dapat diakses di bagian belakang blok ini.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'inisialisasi balasan lokal';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'nama lokal';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Prosedur Blok.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https: // docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Prosedur yang tidak mengembalikan nilai.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'hasil';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'lakukan';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'hasil';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Jalankan blok di \' do \ 'dan kembalikan pernyataan. Berguna jika Anda perlu menjalankan prosedur sebelum mengembalikan nilai ke variabel. ';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'lakukan / hasil';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'hasil';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Prosedur yang mengembalikan nilai hasil.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Peringatan: \ n' +
        'Prosedur ini memiliki \ n' +
        'duplikat input.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.kodular.io/blocks/procedures#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'panggilan';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'panggil';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Panggil prosedur tanpa nilai pengembalian.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'jangan balas kembali';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'panggil';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Panggil prosedur dengan nilai pengembalian.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'panggil balik';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'input';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'masukan:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Prosedur Sorot';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Komponen Blok.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "Blok ini tidak ditentukan. Hapus blok ini!";

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'when';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'do';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_EVENT_TITLE = 'when any';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'call';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'untuk komponen';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'komponen';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'set';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = 'to';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'set';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = 'to';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'komponen';

///////////////////
    / * HelpURL untuk Blok Komponen * /

// Komponen Antarmuka Pengguna
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/bottom-sheet';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = 'https://docs.kodular.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/chat-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/checkbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/circular-progress';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/date-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/floating-action-button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = 'https://docs.kodular.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/image';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = 'https://docs.kodular.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/label';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/linear-progressbar';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/list-view-image-and-text';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/notifier';

    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/radio-button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = 'https://docs.kodular.io/components/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = 'https://docs.kodular.io/components/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = 'https://docs.kodular.io/components/screen';

    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/rating-bar';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = 'https://docs.kodular.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/slider';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/snackbar';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/spinner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/spotlight';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_HELPURL = 'https://docs.kodular.io/components/user-interface/switch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/switch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/switch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/switch';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/tab-layout';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/textbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/time-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-flipper';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/view-pager';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = 'https://docs.kodular.io/components/user-interface/web-viewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/user-interface/webviewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = 'https://docs.kodular.io/components/user-interface/webviewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = 'https://docs.kodular.io/components/user-interface/webviewer';

// Komponen tata letak
    Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_HELPURL = 'https://docs.kodular.io/components/layout/card-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/card-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/card-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-arrangement';

    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_METHODS_HELPURL = 'https://docs.kodular.io/components/layout/side-menu-layout';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPACE_HELPURL = 'https://docs.kodular.io/components/layout/space';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPACE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/space';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_HELPURL = 'https://docs.kodular.io/components/layout/surface-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/surface-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/surface-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_METHODS_HELPURL = 'https://docs.kodular.io/components/layout/surface-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_HELPURL = 'https://docs.kodular.io/components/layout/swipe-refresh-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/swipe-refresh-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/swipe-refresh-layout';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLE_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/table-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLE_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/table-arrangement/';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/vertical-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/vertical-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/vertical-arrangement';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_HELPURL = 'https://docs.kodular.io/components/layout/vertical-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/layout/vertical-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/layout/vertical-scroll-arrangement';

// Komponen media
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_HELPURL = 'https://docs.kodular.io/components/media/audio-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/audio-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/audio-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/audio-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = 'https://docs.kodular.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/camcorder';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = 'https://docs.kodular.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = 'https://docs.kodular.io/components/media/camera';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_HELPURL = 'https://docs.kodular.io/components/media/exoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/exoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/exoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/exoplayer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_HELPURL = 'https://docs.kodular.io/components/media/image-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/image-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/image-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/image-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_HELPURL = 'https://docs.kodular.io/components/media/metadata';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/metadata';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/metadata';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_METHODS_HELPURL = 'https://docs.kodular.io/components/media/metadata';

    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_HELPURL = 'https://docs.kodular.io/components/media/ocr';
    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/ocr';
    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/ocr';
    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_METHODS_HELPURL = 'https://docs.kodular.io/components/media/ocr';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = 'https://docs.kodular.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/player';

    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_HELPURL = 'https://docs.kodular.io/components/media/qr-code';
    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/qr-code';
    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/qr-code';
    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_METHODS_HELPURL = 'https://docs.kodular.io/components/media/qr-code';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = 'https://docs.kodular.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = 'https://docs.kodular.io/components/media/sound';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_HELPURL = 'https://docs.kodular.io/components/media/sound-recorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/soundrecorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/soundrecorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/soundrecorder';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_HELPURL = 'https://docs.kodular.io/components/media/speech-recognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/speechrecognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/speechrecognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/speechrecognizer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_METHODS_HELPURL = 'https://docs.kodular.io/components/media/text-to-speech';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_HELPURL = 'https://docs.kodular.io/components/media/video-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/video-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/video-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/video-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_HELPURL = 'https://docs.kodular.io/components/media/video-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/video-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/video-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/video-player';

    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_METHODS_HELPURL = 'https://docs.kodular.io/components/media/yandex-translate';

    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_HELPURL = 'https://docs.kodular.io/components/media/youtube-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/media/youtube-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_EVENTS_HELPURL = 'https://docs.kodular.io/components/media/youtube-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_METHODS_HELPURL = 'https://docs.kodular.io/components/media/youtube-player';

// Komponen Menggambar dan Animasi
    Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/animation-util';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/animation-util';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/animation-util';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/ball';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/canvas';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-editor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/image-sprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/imagesprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/imagesprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/imagesprite';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_EVENTS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_METHODS_HELPURL = 'https://docs.kodular.io/components/drawing-and-animation/lottie/';

// Komponen peta
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_HELPURL = 'https://docs.kodular.io/components/maps/circle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/circle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/circle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/circle';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/feature-collection';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_HELPURL = 'https://docs.kodular.io/components/maps/line-string';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/line-string';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/line-string';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/line-string';

    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_HELPURL = 'https://docs.kodular.io/components/maps/map';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/map';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/map';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/map';

    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_HELPURL = 'https://docs.kodular.io/components/maps/marker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/marker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/marker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/marker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_HELPURL = 'https://docs.kodular.io/components/maps/polygon';
    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/polygon';
    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/polygon';
    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/polygon';

    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_HELPURL = 'https://docs.kodular.io/components/maps/rectangle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/maps/rectangle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_EVENTS_HELPURL = 'https://docs.kodular.io/components/maps/rectangle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_METHODS_HELPURL = 'https://docs.kodular.io/components/maps/rectangle';

// Komponen sensor
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/accelerometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/accelerometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/accelerometer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_HELPURL = 'https://docs.kodular.io/components/sensors/barcode-scanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/sensors/barcode-scanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensor/barcode-scanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/sensors/barcode-scanner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = 'https://docs.kodular.io/components/sensors/clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/clock';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_HELPURL = 'https://docs.kodular.io/components/sensors/sensors/fingerprint';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/fingerprint';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/gravity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/gravity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/gravity-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/gyroscope-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/sensors/gyroscope-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/sensors/gyroscope-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/light-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor/';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/location-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/magnetic-field-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/magnetic-field-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/magnetic-field-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_HELPURL = 'https://docs.kodular.io/components/sensors/sensors/nearfield';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/nearfield';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/nearfield';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/orientation-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/orientation-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/orientation-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_METHODS_HELPURL = 'https://docs.kodular.io/components/sensors/pedometer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/pressure-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/pressure-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/pressure-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/proximity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/proximity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/proximity-sensor/';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/sound-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_HELPURL = 'https://docs.kodular.io/components/sensors/temperature-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/sensors/temperature-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/sensors/temperature-sensor';

// Komponen sosial
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_HELPURL = 'https://docs.kodular.io/components/social/contact-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/contact-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/contact-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/contact-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_HELPURL = 'https://docs.kodular.io/components/social/email-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/email-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/email-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/email-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_HELPURL = 'https://docs.kodular.io/components/social/phone-call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/phone-call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/phone-call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_METHODS_HELPURL = 'https://docs.kodular.io/components/social/phone-call';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/phone-number-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_HELPURL = 'https://docs.kodular.io/components/social/sharing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/sharing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/sharing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_METHODS_HELPURL = 'https://docs.kodular.io/components/social/sharing';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = 'https://docs.kodular.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = 'https://docs.kodular.io/components/social/texting';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = 'https://docs.kodular.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = 'https://docs.kodular.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = 'https://docs.kodular.io/components/social/twitter';

// Komponen Penyimpanan
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/cloudinary';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_HELPURL = 'https://docs.kodular.io/components/storage/cryptography';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/cryptography';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/cryptography';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_HELPURL = 'https://docs.kodular.io/components/storage/file';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/file';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/file';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/firebase-db';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/fusiontables-control';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = 'https://docs.kodular.io/components/storage/tiny-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/tiny-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/tiny-db';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = 'https://docs.kodular.io/components/storage/tiny-web-db';

// Komponen perangkat
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_HELPURL = 'https://docs.kodular.io/components/device/audio';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/audio';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_METHODS_HELPURL = 'https://docs.kodular.io/components/device/audio';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_HELPURL = 'https://docs.kodular.io/components/device/device-tools';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/device-tools';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_METHODS_HELPURL = 'https://docs.kodular.io/components/device/device-tools';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_HELPURL = 'https://docs.kodular.io/components/device/package';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/package';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_METHODS_HELPURL = 'https://docs.kodular.io/components/device/package';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_HELPURL = 'https://docs.kodular.io/components/device/screenshot';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/screenshot';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_EVENTS_HELPURL = 'https://docs.kodular.io/components/device/screenshot';;
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_METHODS_HELPURL = 'https://docs.kodular.io/components/device/screenshot';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_HELPURL = 'https://docs.kodular.io/components/device/wallpaper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/device/wallpaper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_EVENTS_HELPURL = 'https://docs.kodular.io/components/device/wallpaper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_METHODS_HELPURL = 'https://docs.kodular.io/components/device/wallpaper';

// Komponen Dinamis
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_EVENTS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_METHODS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_EVENTS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_METHODS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-label';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_EVENTS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_METHODS_HELPURL = 'https://docs.kodular.io/components/dynamic/dynamic-textbox';

// Komponen konektivitas
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/activity-starter';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_HELPURL = 'https://docs.kodular.io/components/connectivity/arduino';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/arduino';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/arduino';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-admin';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_PROPERTIES_HELPURL = 'hhttps: //docs.kodular.io/components/connectivity/bluetooth-admin';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-admin';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-admin';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-client';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/bluetooth-server';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_HELPURL = 'https://docs.kodular.io/components/connectivity/download';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/download';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/download';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/download';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/ftp';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_HELPURL = 'https://docs.kodular.io/components/connectivity/network';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/network';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/network';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = 'https://docs.kodular.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = 'https://docs.kodular.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/web';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WIFI_HELPURL = 'https://docs.kodular.io/components/connectivity/wifi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WIFI_METHODS_HELPURL = 'https://docs.kodular.io/components/connectivity/wifi';

// Komponen Google

    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_HELPURL = 'https://docs.kodular.io/components/google/google-google-account-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_EVENTS_HELPURL = 'https://docs.kodular.io/components/google/google-google-account-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_METHODS_HELPURL = 'https://docs.kodular.io/components/google/google-account-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_HELPURL = 'https://docs.kodular.io/components/google/google-maps';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/google/google-maps';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_EVENTS_HELPURL = 'https://docs.kodular.io/components/google/google-maps';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_METHODS_HELPURL = 'https://docs.kodular.io/components/google/google-maps';

// Komponen monetisasi
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-banner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-interstitial';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardedvideo';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/admob-rewardvideo';

    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-banner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/amazon-interstitial';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-banner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/facebook-interstitial';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/in-app-billing';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_HELPURL = 'https://docs.kodular.io/components/monetization/leadbolt';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/leadbolt';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/leadbolt';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_EVENTS_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_METHODS_HELPURL = 'https://docs.kodular.io/components/monetization/whitemobi';

// Komponen mindstorms Lego
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-drive';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-drive';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-drive';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES _HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_EVENTS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-sound';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ui';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ui';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-ui';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_METHODS_HELPURL = 'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';

// Komponen eksperimental
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_HELPURL = 'https://docs.kodular.io/components/experimental/chrome-custom-tabs';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/chrome-custom-tabs';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/chrome-custom-tabs';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_EVENTS_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/cloud-db';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_HELPURL = 'https://docs.kodular.io/components/experimental/notification';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/notification';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/notification';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_HELPURL = 'https://docs.kodular.io/components/experimental/push-notifications';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_PROPERTIES_HELPURL = 'https://docs.kodular.io/components/experimental/push-notifications';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/push-notifications';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_HELPURL = 'https://docs.kodular.io/components/experimental/shell';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_EVENTS_HELPURL = 'https://docs.kodular.io/components/experimental/shell';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/shell';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SHORTCUT_BADGE_HELPURL = 'https://docs.kodular.io/components/experimental/shortcut-badge';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHORTCUT_BADGE_METHODS_HELPURL = 'https://docs.kodular.io/components/experimental/shortcut-badge';

// Lain-lain
    Blockly.Msg.SHOW_WARNINGS = "Tampilkan Peringatan";
    Blockly.Msg.HIDE_WARNINGS = "Sembunyikan Peringatan";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Anda harus mengisi semua soket dengan blok";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "Blok ini harus dihubungkan ke blok acara atau definisi prosedur";

// Pesan dari replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Kesalahan dari Sahabat";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Kesalahan Koneksi Jaringan";
    Blockly.Msg.REPL_NETWORK_ERROR = "Kesalahan Jaringan";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Kesalahan Jaringan Berkomunikasi dengan Sahabat. <br /> Coba mulai ulang Pendamping dan sambungkan kembali";
    Blockly.Msg.REPL_OK = "OK";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Pemeriksaan Versi Teman";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Aplikasi Rekan Anda kedaluwarsa. Klik "OK" untuk memulai pembaruan. Perhatikan milikmu;
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE2 = 'Aplikasi Teman Anda kedaluwarsa. Restart Companion dan gunakan untuk memindai QRCode di bawah untuk memperbarui ';
    Blockly.Msg.REPL_EMULATORS = "emulator's";
    Blockly.Msg.REPL_DEVICES = "perangkat";
    Blockly.Msg.REPL_APPROVE_UPDATE = "layar karena Anda akan diminta untuk menyetujui pembaruan.";
    Blockly.Msg.REPL_NOT_NOW = "Tidak Sekarang";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "Rekan yang Anda gunakan sudah ketinggalan zaman. <br/> <br/> Versi Kodular ini harus digunakan dengan versi Rekan";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "Anda menggunakan Sahabat yang kedaluwarsa. Anda harus memperbarui Pendamping Kodular secepat mungkin. Jika Anda memiliki pengaturan pembaruan otomatis di toko, pembaruan akan terjadi dengan sendirinya segera.";
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "Pendamping yang Anda gunakan dibuat untuk instance berbeda dari Kodular. Untuk mendapatkan tampilan pendamping yang benar pada layar Kodular pada menu Help-> Companion Information.";
    Blockly.Msg.REPL_DISMISS = "Singkirkan";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Pembaruan Perangkat Lunak";
    Blockly.Msg.REPL_OK_LOWER = "Oke";
    Blockly.Msg.REPL_GOT_IT = "Mengerti";
    Blockly.Msg.REPL_UPDATE_INFO = 'Pembaruan sekarang sedang diinstal pada perangkat Anda. Tonton layar perangkat Anda (atau emulator) dan setujui penginstalan perangkat lunak saat diminta. <br /> <br /> PENTING: Saat pembaruan selesai, pilih "SELESAI" (jangan klik "buka"). Lalu pergi ke Kodular di browser web Anda, klik menu "Connect" dan pilih "Reset Connection". Kemudian sambungkan kembali perangkat. ';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE = "Tidak Ada Pembaruan yang Tersedia";
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "Anda harus terhubung ke Rekan untuk memperbaruinya";
    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Tidak dapat mengirim pembaruan ke perangkat / emulator";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Tidak dapat memuat pembaruan dari server Kodular";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Tidak dapat memuat pembaruan dari server Kodular (server tidak merespons)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "Kami sekarang mengunduh pembaruan dari Server Kodular, mohon siaga";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Runtime Error";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/> <i> Catatan: </i> & nbsp; Anda tidak akan melihat kesalahan lain dilaporkan selama 5 detik.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Menghubungkan melalui Kabel USB";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Memulai Android Emulator <br/> Harap tunggu: Ini mungkin membutuhkan satu atau dua menit.";
    Blockly.Msg.REPL_CONNECTING = "Menghubungkan ...";
    Blockly.Msg.REPL_CANCEL = "Batal";
    Blockly.Msg.REPL_GIVE_UP = "Menyerah";
    Blockly.Msg.REPL_KEEP_TRYING = "Terus Mencoba";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Kegagalan Koneksi";
    Blockly.Msg.REPL_NO_START_EMULATOR = "Kami tidak dapat memulai Pendamping Kodular di dalam Emulator";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Dicolokkan?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "Kodular tidak melihat perangkat Anda, pastikan kabel dicolokkan dan drivernya benar.";
    Blockly.Msg.REPL_HELPER_Q = "Helper?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'Helper Pemula Kodular tampaknya tidak berjalan <br /> <a href="https://starter.kodular.io" target="_blank"> Butuh Bantuan? </a>' ;
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB Connected, waiting";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = "detik untuk memastikan semua berjalan.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emulator dimulai, menunggu";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Memulai Aplikasi Rekan pada ponsel yang terhubung.";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Memulai Aplikasi Pengiring di emulator.";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Rekan mulai, menunggu";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Memverifikasi bahwa Rekan Memulai ....";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Sambungkan ke Teman";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Gagal Menghubungkan ke Pendamping Kodular, coba lagi.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Kode Anda";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Apakah Anda Benar-Benar?";
    Blockly.Msg.REPL_FACTORY_RESET = 'Ini akan mencoba mengatur ulang Emulator Anda ke keadaan "pabrik". Jika sebelumnya Anda telah memperbarui Companion yang diinstal di Emulator, Anda mungkin harus melakukan ini lagi. ';

// Pesan dari Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Apakah Anda yakin ingin menghapus semua% 1 dari blok ini?";

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL = "Hasilkan Yail";
    Blockly.Msg.DO_IT = "Lakukan";
    Blockly.Msg.CLEAR_DO_IT_ERROR = "Hapus Kesalahan";
    Blockly.Msg.CAN_NOT_DO_IT = "Tidak Dapat Melakukannya";
    Blockly.Msg.CONNECT_TO_DO_IT = 'Anda harus terhubung dengan pengiring atau emulator untuk menggunakan "Do It"';

// Komponen Menu Komponen Jam
    Blockly.Msg.TIME_YEARS = "Tahun";
    Blockly.Msg.TIME_MONTHS = "Bulan";
    Blockly.Msg.TIME_WEEKS = "Weeks";
    Blockly.Msg.TIME_DAYS = "Days";
    Blockly.Msg.TIME_HOURS = "Jam";
    Blockly.Msg.TIME_MINUTES = "Menit";
    Blockly.Msg.TIME_SECONDS = "Detik";
    Blockly.Msg.TIME_DURATION = "Durasi";

    // Pesan Dialog Koneksi
    Blockly.Msg.DIALOG_SECURE_ESTABLISHING = "20 Membuat Koneksi Aman";
    Blockly.Msg.DIALOG_SECURE_ESTABLISHED = "30 Koneksi Aman Dibangun";
    Blockly.Msg.DIALOG_FOUND_COMPANION = "10 Menemukan Pendampingnya";
  }
};

// Inisialisasi definisi bahasa ke bahasa Inggris
Blockly.Msg.en.switch_blockly_language_to_en.init ();
Blockly.Msg.en.switch_language_to_english.init ();
