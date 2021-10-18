#include <iostream>

using namespace std;

int count_digits(int r){
    int c = 0;
    while(r){
        int y = r % 2;
        if(y % 2 == 1){
            c++;
        }
        r /= 2;
    }
    return c;
}

int toN (int R, int s){
    int n = R;
    while (s){
        n /= 2;
        s--;
    }
    return n;
}

int toR (int N, int s){
    int r = N;
    while(s){
        if(count_digits(r) % 2 == 1){
            r = r * 2 + 1;
        }else{
            r *= 2;
        }
        s--;
    }
    return r;
}

int main()
{
    int R, N, s = 3, x, y;
    cin >> x >> y;
    N = toN(x,s);
    R = toR(N,s);
    while(R >= x){
        N--;
        R = toR(N,s);
    }
    cout << R;
    return 0;
}