#include <iostream>
#include <vector>

using namespace std;

int g (string s);
vector <int> hector;

bool isInHector (int x){
    for (int i = 0; i < hector.size(); i++){
        if (hector[i] == x){
            return true;
        }
    }
    return false;
}

void f (string s){
    if (s.size()==7){
        int a = g(s);
        if (!isInHector(a)){
            hector.push_back(a);
        }
        return;
    }
    f(s+'1');
    f(s+'2');
    f(s+'3');
}

int g (string s){
    int a = 1;
    for (int i = 0; i < s.size(); i++){
        switch (s[i]){
            case '1':{
                a++;
                break;
            }
            case '2':{
                a += 5;
                break;
            }
            case '3':{
                a *= 3;
                break;
            }
        }
    }
    return a;
}

int main()
{
    f("");
    cout << hector.size();
    
    return 0;   
}